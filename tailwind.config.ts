import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './sections/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundColor: {
                footer: '#000',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            fontWeight: {
                400: '400',
                500: '500',
                700: '700',
            },
        },
    },
    plugins: [],
} satisfies Config;
