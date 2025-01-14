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
                    DEFAULT: '#FF7043', // Orange vif (par défaut)
                    hover: '#BF360C', // Rouge foncé (hover des boutons principaux)
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
                border: {
                    DEFAULT: '#E0E0E0', // Gris clair (bordures de formulaire)
                    focus: '#FF7043', // Orange vif (focus sur les champs)
                },
                overlay: {
                    DEFAULT: 'rgba(255, 112, 67, 0.3)', // Orange semi-transparent
                },
            },
            backgroundColor: {
                DEFAULT: '#FAF3E0', // Crème doux (fond général)
                alternate: '#F6E7D8', // Beige clair (sections alternées)
                footer: '#4E342E', // Brun chocolat (fond du footer)
                menu: '#E6D7BD',
            },
            fontFamily: {
                lato: ['var(--font-lato)'],
                playfair: ['var(--font-playfair)'],
            },
            borderColor: {
                dark: '#D3C4A5',
            },
        },
    },
    plugins: [],
} satisfies Config;
