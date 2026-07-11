import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@my-design-system/ui-react/styles/reset";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
