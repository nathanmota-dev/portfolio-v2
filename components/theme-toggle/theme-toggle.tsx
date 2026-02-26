"use client";

import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

function isThemeSetToDark() {
    if (typeof window === "undefined") return false;

    return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
}

export function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkMode = isThemeSetToDark();

        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        setIsDarkMode(darkMode);
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } else {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="group relative flex items-center"
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <IoMoonOutline
                    strokeWidth={1.4}
                    className="size-5 fill-gray-700 transition-transform"
                />
            ) : (
                <IoSunnyOutline
                    strokeWidth={1.4}
                    className="size-5 fill-yellow-300 transition-transform sm:hover:rotate-45"
                />
            )}
        </button>
    );
}