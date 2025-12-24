/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#1a1a1a',
                accent: '#ff3333',
                bg: '#050505',
                dim: 'rgba(255, 255, 255, 0.6)',
            },
            fontFamily: {
                heading: ['"Futura LT"', 'sans-serif'],
                body: ['"Poppins"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
