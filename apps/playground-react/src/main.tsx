import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@jhonatankennedy/ui-react/styles/reset";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
