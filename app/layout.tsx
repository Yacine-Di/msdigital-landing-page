import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const graphik = localFont({
    src: [
        {
            path: './fonts/Graphik-Regular-Trial.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/Graphik-Medium-Trial.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/Graphik-Semibold-Trial.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/Graphik-Bold-Trial.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-graphik',
});

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
            <body className={`${graphik.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
