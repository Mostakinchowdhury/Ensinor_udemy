import React from 'react';
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

export default function welcome() {
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
