import { createRoot } from "react-dom/client"

type UserProps = {
  name: string
  description: string
}

const User = (props: UserProps) => {
  return (
    <div>
      <p>Имя: {props.name}</p>
      <p>Описание: {"❗X"}</p>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<User name={"John"} description={"lorem ipsum"} />)

// Что нужно написать вместо '❗X', что бы в браузере отобразилось описание, которое передали в пропсах ?
