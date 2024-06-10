import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Shop from './components/pages/Shop'
import PauseOnHover from './components/PauseOnHover'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Shop /> */}
      <PauseOnHover/>

    </>
  )
}

export default App
