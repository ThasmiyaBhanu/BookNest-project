import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({ message: "", books: [] })
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/api/status')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => setData({ message: "Offline", books: [] }))
  }, [])

  const filteredBooks = data.books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (!isLoggedIn) {
    return (
      <div className="App" style={{ padding: '50px', textAlign: 'center' }}>
        <h1>📚 Book Nest</h1>
        <div style={{ border: '1px solid #ccc', padding: '30px', borderRadius: '10px', display: 'inline-block' }}>
          <h2>Login</h2>
          <input type="text" placeholder="Username" style={{ display: 'block', margin: '10px auto', padding: '8px' }} />
          <input type="password" placeholder="Password" style={{ display: 'block', margin: '10px auto', padding: '8px' }} />
          <button onClick={() => setIsLoggedIn(true)} style={{ padding: '10px 20px', cursor: 'pointer' }}>Enter Nest</button>
        </div>
      </div>
    )
  }

  return (
    <div className="App" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>📚 Book Nest</h1>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
      
      <input 
        type="text" 
        placeholder="Search for a book..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #646cff' }}
      />

      <div style={{ display: 'grid', gap: '15px' }}>
        {filteredBooks.map(book => (
          <div key={book.id} style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '10px', background: '#fff', color: '#333' }}>
            <h3 style={{ margin: '0' }}>{book.title}</h3>
            <p style={{ margin: '5px 0 0' }}>Author: {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App