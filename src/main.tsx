import axios from "axios"
import { createRoot } from "react-dom/client"
import { useEffect, useState } from "react"

// Types
type Product = {
  id: string
  title: string
  description: string
  price: number
}

type Film = {
  id: number
  nameOriginal: string
  description: string
  ratingImdb: number
}

type ProductsResponse = {
  total: number
  messages: string[]
  page: number
  pageCount: number
  data: Product[]
}

type FilmsResponse = {
  total: number
  messages: string[]
  page: number
  pageCount: number
  data: Film[]
}

type CommonResponse = {
  // your code
}

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })

const api = {
  getProducts() {
    return instance.get<ProductsResponse>("products")
  },
  getFilms() {
    return instance.get<FilmsResponse>("films")
  },
}

// App
const App = () => {
  return (
    <>
      <h1>🛒 Products && 🎦 Films</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Products />
        <Films />
      </div>
    </>
  )
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api.getProducts().then((res) => setProducts(res.data.data))
  }, [])

  return (
    <div style={{ width: "45%" }}>
      <h2>🛒 Products</h2>
      <div>
        {products.map((p) => {
          return (
            <div key={p.id}>
              <b>{p.title}</b>
              <p>{p.description}</p>
              <p>💵 {p.price} $</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Films = () => {
  const [films, setFilms] = useState<Film[]>([])

  useEffect(() => {
    api.getFilms().then((res) => setFilms(res.data.data))
  }, [])

  return (
    <div style={{ width: "45%" }}>
      <h2>🎦 Films</h2>
      <div>
        {films.map((f) => {
          return (
            <div key={f.id}>
              <b>{f.nameOriginal}</b>
              <p>{f.description}</p>
              <p>⭐ {f.ratingImdb} </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<App />)

// 📜 Описание:
// При запуске проекта на экране вы увидите 2 списка: Products и Films.
// С ними все хорошо, но обратите внимание на типизацию ответов с сервера ProductsResponse и FilmsResponse.
// ❗Дублирование типов на лицо.
// Ваша задача написать дженериковый тип CommonResponse и заменить им дублирующие типы.
// ❗Очередность свойств в типах менять запрещено (по причине что нам будет тяжело перебрать все правильные варианты)
// ❗Параметр тип назовите буквой T
//
// В качестве ответа нужно скопировать полностью рабочий дженериковый тип CommonResponse
//
// 🖥 Пример ответа:
// type CommonResponse = {
//   total: T
//   messages: T[]
//   page: T
//   pageCount: T
//   data: T[]
// }
