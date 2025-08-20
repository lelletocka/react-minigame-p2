import { useState } from 'react'
import API from './components/API'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <API />
      </div> 
    </> 
  )
}

export default App
