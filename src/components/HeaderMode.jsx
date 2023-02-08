import { BsMoon, BsMoonFill } from "react-icons/bs";

import useModeContext from "../hook/useModeContext";

export default function HeaderMode() {
  const { darkMode, setDarkMode } = useModeContext();

  function altMode() {
    if (darkMode === "lightMode") {
      setDarkMode("darkMode");
    } else {
      return setDarkMode("lightMode");
    }
  }

  return (
    <div className={darkMode}>
      <div className="headerAllPage">
        <h2>Where is the world</h2>
        <button onClick={altMode}>
          {darkMode === "darkMode" ? (
            <BsMoonFill className="moonFil" />
          ) : (
            <BsMoon />
          )}
          Dark mode
        </button>
      </div>
    </div>
  );
}
