import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="headerAllPage">
        <h2>Where is the world</h2>
        <button>Dark mode</button>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
