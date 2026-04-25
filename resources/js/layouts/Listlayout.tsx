import React from 'react';
import Comhead from '@/components/global/Comhead';
import Footer from '@/components/global/Footer';
import Nav from '@/components/global/nav';

export default function Listlayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <Nav />
            <Comhead />
            {children}
            <Footer />
        </main>
    );
}
