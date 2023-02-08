import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import HeaderMode from "./components/HeaderMode";
import ModeProvider from "./context/ModeProvider";
import FooterAllPage from "./components/FooterAllPage";

function App() {
  return (
    <ModeProvider>
      <HeaderMode />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
      <FooterAllPage />
    </ModeProvider>
  );
}

export default App;
