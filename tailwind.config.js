/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
            },
            colors: {
                'accent-gold': '#D4AF37',
                'accent-bronze': '#CD7F32',
            }
        },
    },
    plugins: [],
}
