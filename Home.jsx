import { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'

function Home() {
  const [books, setBooks] = useState([])

  // Dummy default books if no localStorage data
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('books'))
    if (stored && stored.length > 0) {
      setBooks(stored)
    } else {
      const defaultBooks = [
        { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', read: false },
        { id: 2, title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam', read: false },
        { id: 3, title: 'The Alchemist', author: 'Paulo Coelho', read: false }
      ]
      setBooks(defaultBooks)
      localStorage.setItem('books', JSON.stringify(defaultBooks))
    }
  }, [])

  // Save to localStorage when books change
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  const toggleRead = (id) => {
    const updated = books.map(book =>
      book.id === id ? { ...book, read: !book.read } : book
    )
    setBooks(updated)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Reading Goals</h1>

      {/* Conditional Messages */}
      {books.length === 0 && (
        <p className="text-gray-500 italic">No books added yet</p>
      )}

      {books.length > 0 && books.every(book => book.read) && (
        <p className="text-green-600 font-semibold mb-4">You've read all your books!</p>
      )}

      <div className="grid gap-4">
        {books.map(book => (
          <BookCard key={book.id} book={book} toggleRead={toggleRead} />
        ))}
      </div>
    </div>
  )
}

export default Home