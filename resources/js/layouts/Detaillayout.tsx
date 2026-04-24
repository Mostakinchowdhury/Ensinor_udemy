import React from 'react';
import Footer from '@/components/global/Footer';
import Nav from '@/components/global/nav';

export default function Detaillayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <Nav />
            {children}
            <Footer />
        </main>
    );
}
