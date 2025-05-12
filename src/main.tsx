import { ChangeEvent, useState } from "react"
import { createRoot } from "react-dom/client"

const MIN_COMMENT_SIZE = 5

const LongCommentChecker = () => {
  const [comment, setComment] = useState<string>("")

  const isCommentReady = comment.length > MIN_COMMENT_SIZE

  const setCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newComment = e.currentTarget.value

    setComment(newComment)
  }

  const clearCommentsHandler = () => {
    if (isCommentReady) {
      setComment("")
    }
  }

  return (
    <main>
      <textarea
        placeholder={"Your comment must have more than 5 charters"}
        value={comment}
        onChange={setCommentHandler}
      />
      <div>
        <button disabled={XXX} onClick={clearCommentsHandler}>
          Send comment
        </button>
      </div>
    </main>
  )
}

createRoot(document.getElementById("root")!).render(<LongCommentChecker />)

// Что нужно написать вместо XXX, чтобы кнопка отправки комментария отрабатывала верно:
// первоначально кнопка должна быть в состоянии disable, а после успешного выполнения условия (комментарий должен быть больше 5 символов) должна раздизаблиться.
// ❗ Ответ необходимо дать на основании данных (переменных), которые уже есть в коде
