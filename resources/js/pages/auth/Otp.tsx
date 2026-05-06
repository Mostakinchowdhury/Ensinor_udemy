import { router, useForm } from '@inertiajs/react';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import Listlayout from '@/layouts/Listlayout';

export default function Otp() {
    const { data, setData, post, errors, processing } = useForm<{
        otp: string;
    }>({
        otp: '',
    });

    const handlesubmit = () => {
        post('/otp', {
            onError: () => {
                setData('otp', '');
            },
            onSuccess: () => {
                setData('otp', '');
            },
        });
    };

    // const { flash } = usePage().props as any;
    // useEffect(() => {
    //     if (flash?.success) {
    //         toast.success('Success', {
    //             description: flash.success as string,
    //         });
    //     }

    //     if (flash?.message) {
    //         toast.info('Info', {
    //             description: flash.message as string,
    //         });
    //     }

    //     if (flash?.error) {
    //         toast.error('Failed', {
    //             description: flash.error as string,
    //         });
    //     }
    // }, [flash]);

    return (
        <Listlayout title="Verify your Account" ishide>
            <section className="mx-auto my-20 max-w-[870px] space-y-6 rounded-xl bg-[#F3F6F7] p-8">
                {/* otp input */}
                <div className="space-y-2.5">
                    <InputOTP
                        maxLength={6}
                        value={data.otp}
                        onChange={(value) => setData('otp', value)}
                    >
                        <InputOTPGroup className="flex w-full items-center justify-between gap-2">
                            <InputOTPSlot
                                index={0}
                                className="h-16 w-24 rounded-lg border-[1px] border-[#cecece] bg-white text-center text-xl text-[#575758]"
                            />
                            <InputOTPSlot
                                index={1}
                                className="h-16 w-24 rounded-lg border-[1px] border-[#cecece] bg-white text-center text-xl text-[#575758]"
                            />
                            <InputOTPSlot
                                index={2}
                                className="h-16 w-24 rounded-lg border-[1px] border-[#cecece] bg-white text-center text-xl text-[#575758]"
                            />
                            <InputOTPSlot
                                index={3}
                                className="h-16 w-24 rounded-lg border-[1px] border-[#cecece] bg-white text-center text-xl text-[#575758]"
                            />
                            <InputOTPSlot
                                index={4}
                                className="h-16 w-24 rounded-lg border-[1px] border-[#cecece] bg-white text-center text-xl text-[#575758]"
                            />
                            <InputOTPSlot
                                index={5}
                                className="text-[#575758]] h-16 w-24 rounded-lg border-[1px] border-[#cecece] bg-white text-center text-xl"
                            />
                        </InputOTPGroup>
                    </InputOTP>
                    {errors.otp && (
                        <span className="text-span500 text-sm font-medium">
                            {errors.otp}
                        </span>
                    )}
                </div>
                {/* resend */}
                <div className="flex items-center justify-between">
                    <h3 className="text-xl text-[#2d2d2d]">
                        Didn’t receive the code?
                    </h3>
                    <h4
                        className="cursor-pointer text-xl text-[#1877F7] hover:underline"
                        onClick={() => router.post('resendotp')}
                    >
                        Resend
                    </h4>
                </div>
                <Button
                    className="min-h-14 w-full rounded-xl bg-loginbg text-lg font-semibold text-[#262626]"
                    onClick={handlesubmit}
                    disabled={processing}
                >
                    {processing ? 'Verifying...' : 'Verify email'}
                </Button>
            </section>
        </Listlayout>
    );
}
