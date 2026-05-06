import { useForm } from '@inertiajs/react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Listlayout from '@/layouts/Listlayout';

export default function Forget() {
    const { data, setData, post, errors, processing } = useForm<{
        email: string;
    }>({
        email: '',
    });

    const handlesubmit = (e: any) => {
        e.preventDefault();
        post('/forget', {
            onError: () => {
                setData('email', '');
            },
            onSuccess: () => {
                setData('email', '');
            },
        });
    };

    // const { flash } = usePage();
    // useEffect(() => {
    //     if (flash?.success) {
    //         toast.success('Success', {
    //             description: flash.success as string,
    //         });
    //     }

    //     if (flash?.error) {
    //         toast.error('Failed', {
    //             description: flash.error as string,
    //         });
    //     }
    // }, [flash]);

    return (
        <Listlayout title="Forgot Password" ishide>
            <section className="mx-auto my-20 max-w-[870px] space-y-6 rounded-xl bg-[#F3F6F7] p-8">
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
                        <span className="text-span500 text-sm font-medium">
                            {errors.email}
                        </span>
                    )}
                </div>

                <Button
                    type="submit"
                    className="min-h-14 w-full rounded-xl bg-loginbg text-lg font-semibold text-[#262626]"
                    onClick={handlesubmit}
                    disabled={processing}
                >
                    {processing ? 'Sending OTP...' : 'Send OTP'}
                </Button>
            </section>
        </Listlayout>
    );
}
