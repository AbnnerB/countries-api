import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import HeaderMode from "./components/HeaderMode";
import ModeProvider from "./context/ModeProvider";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkModeCountries")) || "lightMode"
  );
  return (
    <ModeProvider>
      <div className="app">
        <HeaderMode />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ModeProvider>
  );
}

export default App;
