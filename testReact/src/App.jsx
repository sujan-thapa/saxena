import { useState } from 'react'
import FirstComponent from './components/first-component.jsx'
import Contact from './components/Contact.jsx'
import ProfSummary from './components/ProfSummary.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Reference from './components/Reference.jsx'
import Experience from './components/Experience.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      Welcome to Sujan Thapa Website
      <Contact />
      <ProfSummary />
      <Education />
      <Experience />
      <Skills />
      <Reference />


    </div>
    
  )
}

export default App
