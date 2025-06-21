function BookCard({ book, toggleRead }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="text-sm text-gray-600">Author: {book.author}</p>
      <p className="mt-1">Status: {book.read ? 'Read ✅' : 'Unread ❌'}</p>
      <button
        onClick={() => toggleRead(book.id)}
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
      >
        Mark as {book.read ? 'Unread' : 'Read'}
      </button>
    </div>
  )
}
export default BookCard