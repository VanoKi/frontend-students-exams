import { createRoot } from "react-dom/client"

function Button() {
  return <button onClick={xxx}>Click</button>
}

createRoot(document.getElementById("root")!).render(<Button />)

// Что надо написать вместо ххх,
// чтобы на странице появился пустой alert при клике по кнопке?
