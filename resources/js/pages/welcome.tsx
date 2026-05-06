import { usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import Footer from '@/components/global/Footer';
import Nav from '@/components/global/nav';
// import Comhead from '@/components/global/Comhead';
import Becomeinstractor from '@/components/home/Becomeinstractor';
import Couponeover from '@/components/home/Couponeover';
import Coursesover from '@/components/home/Coursesover';
import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import Subscribe from '@/components/home/Subscribe';
import Testimonial from '@/components/home/Testimonial';
import Thinkingcom from '@/components/home/Thinkingcom';
import Trenbooksover from '@/components/home/trebooks';
import TrenCoursesover from '@/components/home/Trecoursesover';
import Treevents from '@/components/home/Treevents';
export type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
};
export default function Welcome() {
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
        <div>
            <Nav />
            {/* <Comhead /> */}
            <Hero />
            <Thinkingcom />
            <Coursesover />
            <Testimonial />
            <Partners />
            <TrenCoursesover />
            <Becomeinstractor />
            <Treevents />
            <Trenbooksover />
            <Subscribe />
            <Couponeover />
            <Footer />
        </div>
    );
}
