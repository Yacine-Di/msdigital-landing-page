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
            colors: {
                primary: {
                    DEFAULT: '#007BFF', // Orange vif (par défaut)
                    light: '#66B2FF', // Bleu foncé (Hover, accent)
                },
                secondary: {
                    DEFAULT: '#FBC02D', // Jaune moutarde (boutons secondaires)
                    hover: '#F9A825', // Jaune doré (hover des boutons secondaires)
                },
                text: {
                    primary: '#212121', // Noir doux (texte principal)
                    secondary: '#757575', // Gris chaud (texte secondaire)
                    footer: '#FAF3E0', // Beige clair (texte dans le footer)
                },
                card: '#00248F',
            },
            backgroundColor: {
                DEFAULT: '#FAF3E0', // Crème doux (fond général)
                alternate: '#F6E7D8', // Beige clair (sections alternées)
                services: '#66B2FF',
                card: '#AADFFF',
                footer: '#000', // Brun chocolat (fond du footer)
            },
            fontFamily: {
                graphik: ['var(--font-graphik)'],
            },
            borderColor: {
                card: '#007BFF ',
            },
        },
    },
    plugins: [],
} satisfies Config;
