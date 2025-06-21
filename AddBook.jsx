import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddBook() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !author) return alert('Please fill all fields')

    const newBook = {
      id: Date.now(),
      title,
      author,
      read: false
    }

    const stored = JSON.parse(localStorage.getItem('books')) || []
    stored.push(newBook)
    localStorage.setItem('books', JSON.stringify(stored))

    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <input
        className="border p-2 w-full"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Book Title"
      />
      <input
        className="border p-2 w-full"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Add Book</button>
    </form>
  )
}

export default AddBook