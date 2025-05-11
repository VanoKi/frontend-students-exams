import { MouseEvent } from "react"
import { createRoot } from "react-dom/client"

const Post = () => {
  const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    // ❗X
    alert("Летим 🚀")
  }

  return (
    <a href={"https://www.youtube.com/"} onClick={onClickHandler}>
      Ссылка, которая ведет на youtube
    </a>
  )
}

createRoot(document.getElementById("root")!).render(<Post />)

// Что надо написать вместо ❗X, чтобы Вас не направило на страницу Youtube
// при клике по ссылке?
