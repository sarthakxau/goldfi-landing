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
                walnut: {
                    50: '#FFFDF9',
                    100: '#FBF6F0',
                    200: '#F0E8DD',
                    300: '#DFD1C0',
                    400: '#BBA68C',
                    500: '#96806A',
                    600: '#7A654F',
                    700: '#53422F',
                    800: '#362A1C',
                    900: '#231A10',
                },
            },
            fontFamily: {
                sans: ['Satoshi', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Satoshi', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['IBM Plex Mono', 'monospace'],
            },
            boxShadow: {
                'card': '0 4px 24px rgba(26, 17, 10, 0.05)',
                'card-hover': '0 12px 40px rgba(26, 17, 10, 0.1)',
                'gold': '0 10px 30px rgba(212, 169, 58, 0.3)',
                'dark-card': '0 8px 32px rgba(0, 0, 0, 0.2)',
            },
            borderRadius: {
                '2xl': '20px',
                '3xl': '24px',
            },
        },
    },
    plugins: [],
}
