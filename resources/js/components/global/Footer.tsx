import { Link } from '@inertiajs/react';
import {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon,
} from 'lucide-react';
import React from 'react';

export default function Footer() {
    return (
        <section className="mt-6 w-full bg-navbg py-8">
            <footer className="container mx-auto max-w-6xl text-white">
                {/* footer topbar */}
                <div className="mb-8 grid grid-cols-5 justify-between gap-6">
                    {/* 1 st part */}
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="rounded-lg bg-loginbg p-2 text-4xl font-semibold text-black">
                            Ensinor
                        </h2>
                        <p className="footnavbtn">
                            Ensinor education theme, built specifically for the
                            education centers which is dedicated to teaching and
                            involve learners.
                        </p>
                        <div className="flex items-center gap-2">
                            <Link
                                href={'/fb'}
                                className="inline-block rounded-full border-[1px] border-loginbg p-1"
                            >
                                <FacebookIcon color="yellow" />
                            </Link>
                            <Link
                                href={'/tw'}
                                className="inline-block rounded-full border-[1px] border-loginbg p-1"
                            >
                                <TwitterIcon color="yellow" radius={'50%'} />
                            </Link>
                            <Link
                                href={'/ln'}
                                className="inline-block rounded-full border-[1px] border-loginbg p-1"
                            >
                                <LinkedinIcon color="yellow" radius={'50%'} />
                            </Link>
                            <Link
                                href={'/yt'}
                                className="inline-block rounded-full border-[1px] border-loginbg p-1"
                            >
                                <YoutubeIcon color="yellow" radius={'50%'} />
                            </Link>
                        </div>
                    </div>
                    {/* 2nd part */}
                    <div className="flex flex-col items-start gap-6">
                        <h2 className="foottitlebtn">Featured Courses</h2>
                        <ul className="flex flex-col items-start gap-4">
                            <li>
                                <Link href="/course/1" className="footnavbtn">
                                    Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/course/2" className="footnavbtn">
                                    UX/UI Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/course/3" className="footnavbtn">
                                    Graphic Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/course/4" className="footnavbtn">
                                    Video Editing
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* 3rd part */}
                    <div className="flex flex-col items-start gap-6">
                        <h2 className="foottitlebtn">Community</h2>
                        <ul className="flex flex-col items-start gap-4">
                            <li>
                                <Link
                                    href="com/business"
                                    className="footnavbtn"
                                >
                                    Business
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/com/istructor"
                                    className="footnavbtn"
                                >
                                    Instructor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/com/myaccount"
                                    className="footnavbtn"
                                >
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link href="/com/event" className="footnavbtn">
                                    Event
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* 4th part */}
                    <div className="flex flex-col items-start gap-6">
                        <h2 className="foottitlebtn">Quick Link</h2>
                        <ul className="flex flex-col items-start gap-4">
                            <li>
                                <Link href="/about" className="footnavbtn">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="footnavbtn">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs" className="footnavbtn">
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" className="footnavbtn">
                                    Courses
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* 5th part */}
                    <div className="flex flex-col items-start gap-6">
                        <h2 className="foottitlebtn">Support</h2>
                        <ul className="flex flex-col items-start gap-4">
                            <li>
                                <h3 className="footnavbtn">
                                    Modhubag, Moghbazar, Dhaka
                                </h3>
                            </li>
                            <li>
                                <h3 className="footnavbtn">
                                    exclusive@gmail.com
                                </h3>
                            </li>
                            <li>
                                <h3 className="footnavbtn">
                                    +88015-88888-9999
                                </h3>
                            </li>
                            <li>
                                <h3 className="footnavbtn">+8801611796703</h3>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* footer bottombar */}
                <div className="mt-6 flex items-center justify-between border-t-2 border-white pt-8">
                    <p className="footnavbtn">
                        © {new Date().getFullYear()} ENSINOR All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <p className="footnavbtn">Terms Of Use</p>
                        <p className="footnavbtn">Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
