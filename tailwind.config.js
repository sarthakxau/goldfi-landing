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
                    50: '#FAF7F4',
                    100: '#F2EDE7',
                    200: '#E0D5C9',
                    300: '#C4B39E',
                    400: '#9E8670',
                    500: '#7A6248',
                    600: '#5C4632',
                    700: '#3E2D1E',
                    800: '#2A1D12',
                    900: '#1A110A',
                },
            },
            fontFamily: {
                sans: ['Manrope', 'system-ui', 'sans-serif'],
                display: ['Cormorant', 'Georgia', 'serif'],
                mono: ['IBM Plex Mono', 'monospace'],
            },
            boxShadow: {
                'card': '0 4px 24px rgba(26, 17, 10, 0.06)',
                'card-hover': '0 12px 40px rgba(26, 17, 10, 0.12)',
                'gold': '0 10px 30px rgba(212, 169, 58, 0.3)',
                'dark-card': '0 8px 32px rgba(0, 0, 0, 0.25)',
            },
            borderRadius: {
                '2xl': '20px',
                '3xl': '24px',
            },
        },
    },
    plugins: [],
}
