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
                bg: "#090909",
                ui: "#17191e",
                text: "#ffffff",
                active: "#ffffff",
                another: "rgba(255,255,255,0.04)",
                nonactive: "#363637",
                selected: "#2e2e30",
                card: "#202228",
                lecture: "#3b0d5e",
                consult: "#3b0d5e",
                laboratory: "#6e1523",
                practice: "#6e1523",
                currentDayCenter: "#3a0d5e",
                currentDayEdges: "rgba(58,8,93,0)",
            }
        }
    },
    plugins: [
        require('tailwindcss-debug-screens'),
    ],
}
