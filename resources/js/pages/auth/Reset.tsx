import { useForm } from '@inertiajs/react';
import { Eye, EyeOff } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Listlayout from '@/layouts/Listlayout';
export default function Resetpassword() {
    const { data, setData, post, errors, transform } = useForm<{
        password: string;
        confirm_password: string;
        show_password: boolean;
        show_confirm_password: boolean;
    }>({
        password: '',
        show_password: false,
        show_confirm_password: false,
        confirm_password: '',
    });

    transform((data) => ({
        ...data,
        password_confirmation: data.confirm_password,
    }));

    const handlesubmit = (e: any) => {
        e.preventDefault();
        post('/reset-password', {
            onError: () => {
                setData('password', '');
                setData('confirm_password', '');
                setData('show_password', false);
                setData('show_confirm_password', false);
            },
            onSuccess: () => {
                setData('password', '');
                setData('confirm_password', '');
                setData('show_password', false);
                setData('show_confirm_password', false);
            },
        });
    };

    return (
        <Listlayout title="Create a new password" ishide>
            <section className="mx-auto my-20 max-w-[870px] space-y-6 rounded-xl bg-[#F3F6F7] p-8">
                {/* password input */}
                {/* Password input */}
                <div className="space-y-2.5">
                    <Label
                        htmlFor="password"
                        className="block text-xl font-normal text-[#2d2d2d]"
                    >
                        Create New Password
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
                        <span className="text-span500 text-sm font-medium">
                            {errors.password}
                        </span>
                    )}
                </div>
                {/* Password confirm input */}

                <div className="space-y-2.5">
                    <Label
                        htmlFor="confirm_password"
                        className="block text-xl font-normal text-[#2d2d2d]"
                    >
                        New Confirm Password
                    </Label>
                    <div className="relative w-full p-0">
                        <Input
                            id="password"
                            type={
                                data.show_confirm_password ? 'text' : 'password'
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
                        <span className="text-span500 text-sm font-medium">
                            {errors.confirm_password}
                        </span>
                    )}
                </div>

                <Button
                    type="submit"
                    className="min-h-14 w-full rounded-xl bg-loginbg text-lg font-semibold text-[#262626]"
                    onClick={handlesubmit}
                >
                    Change Password
                </Button>
            </section>
        </Listlayout>
    );
}
