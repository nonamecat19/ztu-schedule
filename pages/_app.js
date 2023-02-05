import '../src/styles/globals.css'
import {createTheme, NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import { IconContext } from "react-icons";


const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {}, // optional
    }
})

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {}, // optional
    }
})


export default function App({Component, pageProps}) {
    return (
        <NextThemesProvider
            // defaultTheme="system"
            defaultTheme="dark"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}
        >
            <NextUIProvider>
                <IconContext.Provider value={{style: {verticalAlign: 'middle'}}}>
                    <Component {...pageProps} />
                </IconContext.Provider>
            </NextUIProvider>
        </NextThemesProvider>
    )
}
