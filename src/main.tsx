import { useState, ChangeEvent } from "react"
import { createRoot } from "react-dom/client"

const Notes = () => {
  const [newNote, setNewNote] = useState<string>("")
  const [notes, setNotes] = useState<string[]>([])

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewNote(e.currentTarget.value)
  }

  const addNoteHandler = () => {
    setNotes([newNote, ...notes])
    setNewNote("")
  }

  return (
    <div>
      <textarea value={newNote} onChange={onChangeHandler} onBlur={addNoteHandler} />
      <h4>Notes:</h4>
      <div>
        {notes.map((note, i) => (
          <p key={i}>{note}</p>
        ))}
      </div>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<Notes />)

// Что надо написать вместо ❗X,
// чтобы при потере инпутом фокуса добавлялась заметка
