// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import FaviconGenerator from './components/FaviconGenerator'
// import Header from './components/Header'
import {Home, Research, Outreach, Resume, Personal} from './pages'
import { Header, Footer, FaviconGenerator } from './components'

function App() {
  // const [count, setCoun2t] = useState(0)

  return (
    <div className="myApp">
      <FaviconGenerator />
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/research" element={<Research />} />
            {/* <Route path="/outreach" element={<Outreach />} /> */}
            <Route path="/personal" element={<Personal />} />
          </Routes>
      </main>

      <Footer />
     
    </div>
      
  )
}

export default App
