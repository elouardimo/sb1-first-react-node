import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [message, setMessage] = useState('Chargement...')

  useEffect(() => {
    axios.get('/api/hello')
      .then(response => setMessage(response.data.message))
      .catch(error => {
        console.error('Erreur:', error);
        setMessage('Erreur lors du chargement du message');
      });
  }, [])

  return (
    <>
      <h1>Application React + Node.js</h1>
      <div className="card">
        <p>Message du serveur : {message}</p>
      </div>
    </>
  )
}

export default App