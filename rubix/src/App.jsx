import { useState } from 'react'
import './App.css'
import Home_page from './components/Home_page'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Home_page />
      {/* <Footer /> */}

    </>
  )
}

export default App
