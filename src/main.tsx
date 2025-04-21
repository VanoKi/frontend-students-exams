import { useState } from "react"

type Props = {
  text: string
  className?: string
}

export const CustomButton = (props: Props) => {
  const [count, setCount] = useState(0)

  const onClick = () => {
    setCount((count += 1))
  }

  return (
    <div>
      <p>{count}</p>
      <button className={props.className} onClick={onClick}>
        {props.text}
      </button>
    </div>
  )
}
