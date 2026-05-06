<?php

namespace App\Http\Controllers;

use App\Mail\Otpmail;
use App\Models\OtpAttempt;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class AuthController extends Controller
{
    // view page of login
    public function login(){
      return inertia("auth/Login");
     }

    //  attemptlogin

    public function attemptlogin(Request $request){
        $request->validate([
          "email"=>"required|email",
          "password"=>"required|min:8"
        ]);
        $data=$request->only("email","password");
        if(Auth::attempt($data)){
          $request->session()->regenerate();
          return redirect()->route("home")->with("success","Login successful");
        }
        return redirect()->route("login")->with("error","Invalid credentials");
       }

    //    view page of signup
    public function signup(){
        return inertia("auth/Signup");
    }

    // attempt signup
    public function attemptsignup(Request $request){
        $request->validate([
            "name"=>"required",
            "email"=>"required|email|unique:users,email",
            "password"=>"required|confirmed|min:8"
        ]);
        $data=$request->only("name","email","password");
        $user=User::create($data);
        Auth::login($user);
        return redirect()->route("home")->with("success","Account created successful");
     }
    

    //  view page of forget password

    public function forget(){

      return inertia("auth/Forget");
    }

    // attempt forget

    public function attemptforget(Request $request){
       $request->validate([
        "email"=>"required|email"
       ]);
       $data=$request->only("email");
       $user=User::where("email",$data["email"])->first();
       if(!$user){
        return redirect()->route("forget")->with("error","User with this Email not found");
       }

       $otpobj=OtpAttempt::create([
        "email"=>$data["email"],
        "otp"=>rand(100000,999999),
        "expires_at"=>now()->addMinutes(10)
       ]);

       session(["token" => $otpobj->token]);
       session()->regenerate();
       Mail::to($otpobj->email)->send(new Otpmail($otpobj->otp));
       return redirect()->route("otp")->with("success","OTP sent to your email {$data['email']} and it valid for next 10 minites");
    }

    // otp view page
    public function otp(){
    return inertia("auth/Otp",["email"=>session("email")]);
    }

    // attempt otp
    public function attemptotp(Request $request){
        $request->validate([
            "otp"=>"required|digits:6"]);
        $data=$request->only("otp");
        $dbotp=OtpAttempt::where("token",session("token"))->first();
        if(!$dbotp){
            return redirect()->route("otp")->with("error","Otp missing You need to request for forget password first");
        }
        $user=User::where("email",$dbotp->email)->first();
        if(!$user){
            return redirect()->route("otp")->with("error","User not found with this email");     
        }
        if($dbotp->otp !== (string) $data["otp"]){
            // dd($dbotp->otp,$data["otp"]);
            return redirect()->route("otp")->with("error","Invalid OTP");
        }
        if($dbotp->expires_at->isPast()){
            return redirect()->route("otp")->with("error","OTP has expired");
        }
        $dbotp->submitted_at=now();
        $dbotp->save();

        return redirect()->route("resetpassword")->with("success","OTP verified successfully, you need to reset your password now within 15 minutes");
          
        }

        public function resendotp(){
            $dbotp=OtpAttempt::where("token",session("token"))->first();
            if(!$dbotp){
                return redirect()->route("otp")->with("error","Otp missing You need to request for forget password first");
            }
            $dbotp->otp=rand(100000,999999);
            $dbotp->expires_at=now()->addMinutes(10);
            $dbotp->submitted_at=now();
            $dbotp->save();
            Mail::to($dbotp->email)->send(new Otpmail($dbotp->otp));
            return redirect()->route("otp")->with("success","OTP resent to your email {$dbotp->email} and it valid for next 10 minites");
        }


        // reset password view page

        public function resetpassword(){
            return inertia("auth/Reset");
        }

        // attempt reset password
        public function attemptresetpassword(Request $request){
            $request->validate([
                "password"=>"required|confirmed|min:8"
            ]);
            $data=$request->only("password");
            $otpobj=session("token") ? OtpAttempt::where("token",session("token"))->first() : null;
            if(!$otpobj || $otpobj->submitted_at === null || $otpobj->submitted_at->addMinutes(15)->isPast()){
                return redirect()->route("resetpassword")->with("error","OTP verification is required and it should be within 15 minutes after OTP verification");
                
                }
            $email=$otpobj->email;

             if(!$email){
                return redirect()->route("resetpassword")->with("error","Otp missing You need to request for forget password first");
            }
            $user=User::where("email",$email)->first();
            if(!$user){
                return redirect()->route("resetpassword")->with("error","User not found with this email");     
            }
            $user->password=password_hash($data["password"], PASSWORD_DEFAULT);
            $user->save();
            if(session()->has('token')){
                OtpAttempt::where("token",session("token"))->delete();
                session()->forget("token");
            }
            return redirect()->route("login")->with("success","Password reset successful");
        }

        // logout
        public function logout(Request $request){
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            return redirect()->route("login")->with("success","Logout successful");
        }
}
