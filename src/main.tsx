import { createRoot } from "react-dom/client"

const CrazyButton = (props: any) => {
  const style = {
    color: props.fontcolor,
    backgroundColor: props.bgColor,
  }

  return <button style={style}>{props.title}</button>
}

export const App = () => {
  return (
    <div>
      <CrazyButton title={"delete"} fontColor={"white"} bgColor={"red"} />
      <CrazyButton title={"add"} fontColor={"white"} bgColor={"green"} />
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<App />)

// Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел
