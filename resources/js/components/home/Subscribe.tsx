import { useForm, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Subscribe() {
    // const hasShown = useRef(false);
    const { data, setData, post } = useForm({ email: '' });

    const handlepost = () => {
        post('/subscribe', {
            onSuccess: () => {
                setData('email', '');
            },
            onError: () => {
                setData('email', 'error');
            },
        });
    };

    const { flash, props } = usePage();

    console.log('pages info ', usePage());

    useEffect(() => {
        if (flash?.success) {
            toast.success('Subscribe succesfully', {
                description: flash.success as string,
            });
        }

        if (props.errors?.email) {
            toast.error('Subscribe failed', {
                description: props.errors.email,
            });
        }
    }, [flash, props.errors]);

    return (
        <div className="relative mx-auto my-24 box-border flex h-[430px] max-w-6xl items-center overflow-hidden rounded-xl bg-[#FFF5CC] p-6">
            {/* rings */}
            <div className="absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/4 rounded-full border-[80px] border-loginbg" />
            <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/3 -translate-y-1/2 rounded-full border-[40px] border-loginbg" />

            {/* rings end */}
            <div>
                <h2 className="max-w-[600px] text-5xl font-semibold text-text40">
                    Are you ready for a more great Conversation?
                </h2>
                {/* search bar */}
                <div className="mt-6 box-border flex h-11 w-80 items-center gap-0 overflow-hidden rounded-2xl bg-white text-black">
                    <Input
                        placeholder="Enter your email"
                        className="footnavbtn placeholder:poppins border-0 text-sm font-normal text-[#707071] shadow-none outline-0 placeholder:text-sm placeholder:font-normal placeholder:text-[#707071] focus-within:ring-0 focus-within:outline-0 focus:ring-0 focus:outline-0 focus-visible:ring-0 focus-visible:outline-0"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <Button
                        className="poppins h-full cursor-pointer rounded-none bg-loginbg px-6 py-2 text-sm font-medium text-black hover:bg-loginbg/90 focus:bg-loginbg/90 active:bg-loginbg/90"
                        onClick={handlepost}
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
            {/* pic */}
        </div>
    );
}
