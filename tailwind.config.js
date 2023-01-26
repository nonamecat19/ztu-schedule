/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/features/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        debugScreens: {
            prefix: '',
            ignore: ['dark'],
            style: {
                backgroundColor: '#fff',
                color: '#000',
                border: 'none',
                padding: '0.1rem',
                borderTopRightRadius: '0.5rem',
            },

        },
        colors: {
            bg: "#0f1114",
            ui: "#17191e",
            text: "#ffffff",
            active: "#ffffff",
            nonactive: "#363637",
            selected: "#2e2e30",
            card: "#202228",
            lec: "#949dff",
            lab: "#f6b382",
            pra: "#ff7f96",
        }
    },
    plugins: [
        require('tailwindcss-debug-screens'),
    ],
}
