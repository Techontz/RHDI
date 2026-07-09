import { useState } from "react";
export function useDarkMode() {
  const getInitialDarkMode = () => {
    return document.cookie.includes("darkMode=true");
  };

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.cookie = `darkMode=${newMode};path=/;expires=${new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toUTCString()}`;
      return newMode;
    });
  };

  return [darkMode, toggleDarkMode];
}
