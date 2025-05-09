import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
    title: 'SMDesign',
    description: 'Booster de restaurant Halal',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
