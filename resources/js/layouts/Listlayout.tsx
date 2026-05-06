import { usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import Comhead from '@/components/global/Comhead';
import Footer from '@/components/global/Footer';
import Nav from '@/components/global/nav';

export default function Listlayout({
    children,
    title,
    ishide,
}: {
    children: React.ReactNode;
    title?: string;
    ishide?: boolean;
}) {
    const { flash } = usePage().props as any;
    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success as string, {
                style: {
                    backgroundColor: 'green',
                    color: '#fff',
                    fontWeight: 'bold',
                },
            });
        }

        if (flash?.message) {
            toast.info(flash.message as string, {
                style: {
                    backgroundColor: '#007bff',
                    color: '#fff',
                    fontWeight: 'bold',
                },
            });
        }

        if (flash?.error) {
            toast.error(flash.error as string, {
                style: {
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    fontWeight: 'bold',
                },
            });
        }
    }, [flash]);

    return (
        <main>
            <Nav />
            <Comhead title={title} ishide={ishide} />
            {children}
            <Footer />
        </main>
    );
}
