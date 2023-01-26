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
        extend: {
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
                another: "rgba(255,255,255,0.11)",
                nonactive: "#363637",
                selected: "#2e2e30",
                card: "#202228",
                lecture: "#949dff",
                consult: "#949dff",
                laboratory: "#ff7f96",
                practice: "#ff7f96",
                currentDayCenter: "#471175",
                currentDayEdges: "rgba(126,34,206,0.07)",

            }
        }
    },
    plugins: [
        require('tailwindcss-debug-screens'),
    ],
}
