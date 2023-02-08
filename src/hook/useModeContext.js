import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

function useModeContext() {
  const context = useContext(ModeContext);

  if (context === undefined) {
    throw new Error("não está dentro do contexto");
  }

  return context;
}

export default useModeContext;
