import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddBook from './pages/AddBook'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddBook />} />
    </Routes>
  )
}

export default App