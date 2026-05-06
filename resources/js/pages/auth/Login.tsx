import { Link, useForm } from '@inertiajs/react';
import { Eye, EyeOff } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Listlayout from '@/layouts/Listlayout';

export default function Login() {
    const [issu, setIssu] = React.useState(true);
    const { data, setData, post, errors, transform } = useForm<{
        email: string;
        password: string;
        rememberme: boolean;
        show_password: boolean;
        show_confirm_password: boolean;
        name: string;
        confirm_password: string;
    }>({
        email: '',
        password: '',
        rememberme: false,
        show_password: false,
        show_confirm_password: false,
        name: '',
        confirm_password: '',
    });

    transform((data) => ({
        ...data,
        password_confirmation: data.confirm_password,
    }));

    const handlesubmit = () => {
        if (issu) {
            post('/signup', {
                onSuccess: () => {
                    setData({
                        email: '',
                        password: '',
                        rememberme: false,
                        show_password: false,
                        show_confirm_password: false,
                        name: '',
                        confirm_password: '',
                    });
                },
                onError: () => {
                    setData({
                        email: '',
                        password: '',
                        rememberme: false,
                        show_password: false,
                        show_confirm_password: false,
                        name: '',
                        confirm_password: '',
                    });
                },
            });
        } else {
            post('/login', {
                onSuccess: () => {
                    setData({
                        email: '',
                        password: '',
                        rememberme: false,
                        show_password: false,
                        show_confirm_password: false,
                        name: '',
                        confirm_password: '',
                    });
                },
                onError: () => {
                    setData({
                        email: '',
                        password: '',
                        rememberme: false,
                        show_password: false,
                        show_confirm_password: false,
                        name: '',
                        confirm_password: '',
                    });
                },
            });
        }
    };

    return (
        <Listlayout
            title={
                issu
                    ? `Welcome Back! Sign In
                      to Continue`
                    : `Welcome To ENSINOR !
                      Create An Account`
            }
            ishide
        >
            <section className="mx-auto my-20 max-w-[870px] space-y-6 rounded-xl bg-[#F3F6F7] p-8">
                {/* button or nav button */}
                <div className="mb-10 flex items-center">
                    {/* Signup  button*/}
                    <div
                        className={`grow cursor-pointer px-6 py-2 text-center text-[22px] font-medium ${issu ? 'border-b-2 border-loginbg text-loginbg' : 'text-[#737373]'}`}
                        onClick={() => setIssu(true)}
                    >
                        SIGN UP
                    </div>
                    <div
                        className={`grow cursor-pointer px-6 py-2 text-center text-[22px] font-medium ${!issu ? 'border-b-2 border-loginbg text-loginbg' : 'text-[#737373]'}`}
                        onClick={() => setIssu(false)}
                    >
                        SIGN IN
                    </div>
                </div>
                {/* Your full Name input */}
                {issu && (
                    <div className="space-y-2.5">
                        <Label
                            htmlFor="name"
                            className="block text-xl font-normal text-[#2d2d2d]"
                        >
                            Your full Name
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Enter your Name"
                            value={data.name}
                            className="block min-h-14 w-full rounded-lg border-[1px] border-[#E6E6E6] bg-white text-lg text-[#999999] placeholder:text-lg placeholder:text-[#999999]"
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        {errors.name && (
                            <span className="text-span500 text-sm font-medium text-red-700">
                                {errors.name}
                            </span>
                        )}
                    </div>
                )}
                {/* email input */}
                <div className="space-y-2.5">
                    <Label
                        htmlFor="email"
                        className="block text-xl font-normal text-[#2d2d2d]"
                    >
                        Email Address
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={data.email}
                        className="block min-h-14 w-full rounded-lg border-[1px] border-[#E6E6E6] bg-white text-lg text-[#999999] placeholder:text-lg placeholder:text-[#999999]"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && (
                        <span className="text-span500 text-sm font-medium text-red-700">
                            {errors.email}
                        </span>
                    )}
                </div>
                {/* Password input */}
                <div className="space-y-2.5">
                    <Label
                        htmlFor="password"
                        className="block text-xl font-normal text-[#2d2d2d]"
                    >
                        Password
                    </Label>
                    <div className="relative w-full p-0">
                        <Input
                            id="password"
                            type={data.show_password ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={data.password}
                            className="block min-h-14 w-full rounded-lg border-[1px] border-[#E6E6E6] bg-white text-lg text-[#999999] placeholder:text-lg placeholder:text-[#999999]"
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                        />
                        {data.show_password ? (
                            <EyeOff
                                size={22}
                                color="black"
                                className="absolute top-1/2 right-3 inline-block -translate-y-1/2 cursor-pointer p-0"
                                onClick={() => setData('show_password', false)}
                            />
                        ) : (
                            <Eye
                                size={22}
                                color="black"
                                className="absolute top-1/2 right-3 inline-block -translate-y-1/2 cursor-pointer p-0"
                                onClick={() => setData('show_password', true)}
                            />
                        )}
                    </div>
                    {errors.password && (
                        <span className="text-span500 text-sm font-medium text-red-700">
                            {errors.password}
                        </span>
                    )}
                </div>
                {/* Password confirm input */}
                {issu && (
                    <div className="space-y-2.5">
                        <Label
                            htmlFor="confirm_password"
                            className="block text-xl font-normal text-[#2d2d2d]"
                        >
                            Password
                        </Label>
                        <div className="relative w-full p-0">
                            <Input
                                id="password"
                                type={
                                    data.show_confirm_password
                                        ? 'text'
                                        : 'password'
                                }
                                placeholder="Enter confirm password"
                                value={data.confirm_password}
                                className="block min-h-14 w-full rounded-lg border-[1px] border-[#E6E6E6] bg-white text-lg text-[#999999] placeholder:text-lg placeholder:text-[#999999]"
                                onChange={(e) =>
                                    setData('confirm_password', e.target.value)
                                }
                            />
                            {data.show_confirm_password ? (
                                <EyeOff
                                    size={22}
                                    color="black"
                                    className="absolute top-1/2 right-3 inline-block -translate-y-1/2 cursor-pointer p-0"
                                    onClick={() =>
                                        setData('show_confirm_password', false)
                                    }
                                />
                            ) : (
                                <Eye
                                    size={22}
                                    color="black"
                                    className="absolute top-1/2 right-3 inline-block -translate-y-1/2 cursor-pointer p-0"
                                    onClick={() =>
                                        setData('show_confirm_password', true)
                                    }
                                />
                            )}
                        </div>
                        {errors.confirm_password && (
                            <span className="text-span500 text-sm font-medium text-red-700">
                                {errors.confirm_password}
                            </span>
                        )}
                    </div>
                )}
                {/* remeber and Forget */}
                {!issu && (
                    <div className="flex items-center justify-between gap-4">
                        <Label className="block text-xl text-[#2d2d2d]">
                            <Checkbox
                                checked={data.rememberme as boolean}
                                onCheckedChange={(checked) =>
                                    setData('rememberme', checked as boolean)
                                }
                                className="mr-2 inline-block checked:bg-[#2d2d2d]!"
                            />
                            Remember me
                        </Label>
                        <Link
                            className="text-xl text-[#2d2d2d] hover:underline"
                            href={'/forget'}
                        >
                            Forget password?
                        </Link>
                    </div>
                )}
                <Button
                    type="submit"
                    className="min-h-14 w-full rounded-xl bg-loginbg text-lg font-semibold text-[#262626]"
                    onClick={handlesubmit}
                >
                    {issu ? 'Sign Up' : 'Sign In'}
                </Button>
                {issu ? (
                    <h3 className="mt-6 w-full text-center text-xl text-[#545454]">
                        Have an account?{' '}
                        <span
                            className="cursor-pointer text-loginbg underline"
                            onClick={() => setIssu(false)}
                        >
                            Sign In
                        </span>
                    </h3>
                ) : (
                    <h3 className="mt-6 w-full text-center text-xl text-[#545454]">
                        Don’t have an account?{' '}
                        <span
                            className="cursor-pointer text-loginbg underline"
                            onClick={() => setIssu(true)}
                        >
                            Sign Up
                        </span>
                    </h3>
                )}
            </section>
        </Listlayout>
    );
}
