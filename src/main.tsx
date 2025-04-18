import { StrictMode, useState } from "react"
import { createRoot } from "react-dom/client"
import App from "../App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Какой тип правильнее указать вместо "any" при типизации стэйта?
