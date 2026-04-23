import { Link } from '@inertiajs/react';
import { ShoppingBasket } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

export default function Nav() {
    return (
        <header className="w-full bg-navbg p-4">
            {' '}
            {/* হেডার ফুল উইডথ থাকবে */}
            <nav className="container mx-auto flex max-w-6xl items-center justify-between">
                {/* Logo */}
                <div>
                    <h2 className="rounded-lg bg-loginbg p-2 text-4xl font-semibold">
                        Ensinor
                    </h2>
                </div>

                {/* Nav Links - flex ব্যবহার করতে হবে যাতে পাশাপাশি থাকে */}
                <ul className="flex items-center gap-6 text-white">
                    <li>
                        <Link href="/" className="navbtn">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/courses" className="navbtn">
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link href="/instructors" className="navbtn">
                            Instructors
                        </Link>
                    </li>
                    <li>
                        <Link href="/business" className="navbtn">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link href="/pages" className="navbtn">
                            Pages
                        </Link>
                    </li>
                    <li>
                        <Link href="/events" className="navbtn">
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" className="navbtn">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link href="/cart">
                            <ShoppingBasket size={20} />
                        </Link>
                    </li>
                </ul>

                {/* Login Button */}
                <Button className="navbtn relative bg-loginbg text-black">
                    Login{' '}
                    <span className="absolute top-0 -left-14 h-full w-0.5 bg-white"></span>
                </Button>
            </nav>
        </header>
    );
}
