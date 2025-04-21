import { createRoot } from "react-dom/client"

type Props = {
  city: string // 'Minsk'
  country: string // 'Belarus'
  coords?: string // '53.917501,27.604851'
}

const App = () => {
  return <Component city="Minsk" country={"Belarus"} />
}

const Component = ({ city, country, coords }: Props) => {
  return (
    <div>
      <p>{city}</p>
      <p>{country}</p>
      <p>{coords}</p>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<App />)

// Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 10 (cтрока с ошибкой), чтобы не было ошибки
