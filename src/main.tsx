import { MouseEvent } from "react"
import { createRoot } from "react-dom/client"

const AuthForm = () => {
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    // ❗X
    alert("🚀🚀🚀")
  }
  return (
    <form>
      <div>
        <label style={{ padding: "10px 0" }}>
          Name:
          <input type={"email"} name={"email"} />
        </label>
      </div>
      <div>
        <label style={{ padding: "10px 0" }}>
          Password:
          <input type={"password"} name={"password"} />
        </label>
      </div>
      <button onClick={onClickHandler} type={"submit"}>
        Log in
      </button>
    </form>
  )
}

createRoot(document.getElementById("root")!).render(<AuthForm />)

// Что надо написать вместо ❗X, чтобы данные из формы
// не отправлялись на сервер и страница не перезагружалась
// при клике по кнопке?
