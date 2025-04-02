import { createRoot } from "react-dom/client"

type News = {
  title: string
  author: string
}

type Article = {
  title: string
  date: string
  text: string
}

type PageProps = {
  news: News[]
  mainArticle: Article
}

const Page = (props: PageProps) => {
  return (
    <div>
      <article>
        <h1>Название: {props.mainArticle.title}</h1>
        <div>{props.mainArticle.date}</div>
        <div>{props.mainArticle.text}</div>
      </article>
      <aside>
        <h2>Articles:</h2>
        <ul>
          {props.news.map((n) => (
            <li>
              {n.title}, {n.author}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(
  <Page
    news={[
      { author: "Ivanov", title: "news title 1" },
      { author: "Petrov", title: "news title 2" },
    ]}
    mainArticle={{ title: "article title 1", text: "text 1", date: "21.01.2001" }}
  />,
)

// Что нужно написать вместо XXX и YYY, чтобы отобразить данные?
// Ответ дайте через пробел, например: component props
