/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: '#D4A93A',
                    light: '#F2C94C',
                    dark: '#B8941F',
                },
                light: {
                    DEFAULT: '#FAFAF8',
                    secondary: '#FFFFFF',
                    tertiary: '#F5F5F2',
                },
                dark: {
                    DEFAULT: '#1A1A1A',
                    secondary: '#333333',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Space Grotesk', 'system-ui', 'sans-serif'],
                mono: ['IBM Plex Mono', 'monospace'],
            },
            boxShadow: {
                'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
                'card-hover': '0 8px 32px rgba(0, 0, 0, 0.1)',
                'gold': '0 10px 30px rgba(212, 169, 58, 0.35)',
            },
            borderRadius: {
                '2xl': '20px',
                '3xl': '24px',
            },
        },
    },
    plugins: [],
}
