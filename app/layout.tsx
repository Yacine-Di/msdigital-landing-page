import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const loto = localFont({
    src: [
        {
            path: './fonts/Lato-Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: './fonts/Lato-Bold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './fonts/Lato-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/Lato-Thin.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/Lato-Light.ttf',
            weight: '200',
            style: 'normal',
        },
    ],
    variable: '--font-lato',
});

const playfairDisplay = localFont({
    src: [
        {
            path: './fonts/PlayfairDisplay-Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: './fonts/PlayfairDisplay-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './fonts/PlayfairDisplay-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/PlayfairDisplay-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/PlayfairDisplay-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/PlayfairDisplay-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-playfair',
});

export const metadata: Metadata = {
    title: 'Ahmed Design',
    description: 'Boosteur de commerce',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${loto.variable} ${playfairDisplay.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
