import { useEffect, useState } from "react";
import { ModeContext } from "./ModeContext";

export default function ModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkModeCountries")) || "lightMode"
  );

  useEffect(() => {
    localStorage.setItem("darkModeCountries", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
}
