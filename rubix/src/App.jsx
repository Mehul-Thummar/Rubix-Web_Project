import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Page from './pages/Page'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Page" element={<Page />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
