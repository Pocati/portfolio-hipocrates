/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Isso é o que permite o seu tema escuro funcionar via Redux
    theme: {
        extend: {
            colors: {
                darkBg: '#0f172a',
                darkCard: '#1e293b',
                accent: '#38bdf8',
            },
        },
    },
    plugins: [],
}