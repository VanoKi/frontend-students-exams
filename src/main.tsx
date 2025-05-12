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
      <textarea value={newNote} onChange={onChangeHandler} />
      <div>
        <button onClick={addNoteHandler}>Add note</button>
        <button onClick={xxx}>Clear notes list</button>
      </div>
      <h4>Notes:</h4>
      <div>
        {notes.map((note) => (
          <p>{note}</p>
        ))}
      </div>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<Notes />)
// Что надо написать вместо ххх,
// чтобы при клике на кнопку `Clear notes list` список заметок очищался?
