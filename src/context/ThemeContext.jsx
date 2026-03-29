import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const themes = [
    { id: "dark", label: "Dark" },
    { id: "light", label: "Light" },
    { id: "cyberpunk", label: "Cyberpunk" },
    { id: "fallout", label: "Fallout" },
];

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("portfolio-theme") || "dark"
    );


    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        document.body.className = `theme-${theme}`;
        localStorage.setItem("portfolio-theme", theme);
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}