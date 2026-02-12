/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink': '#004D4D', // From original code
        'bg': '#FFFDF5', // From original code
      },
      fontFamily: {
        'serif': ['"Times New Roman"', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
      keyframes: {
        'float-rotate': {
          '0%': { transform: 'rotateX(-15deg) rotateY(-25deg) translateY(0px)' },
          '50%': { transform: 'rotateX(-15deg) rotateY(-35deg) translateY(-20px)' },
          '100%': { transform: 'rotateX(-15deg) rotateY(-25deg) translateY(0px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        reveal: {
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'float-rotate': 'float-rotate 8s infinite ease-in-out',
        'ticker': 'ticker 20s linear infinite',
        'reveal': 'reveal 0.8s forwards',
      },
    },
  },
  plugins: [],
}
