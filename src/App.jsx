import React from "react"
import { Routes, Route } from "react-router-dom"
import Skill from "./Skills.jsx"
import About from "./About.jsx"
import Skills2 from "./Skills2.jsx"

function App() {
  return (
   <React.Fragment>
    <Routes>
      <Route path="/" element={<Skill/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills2/>}/>
    </Routes>
   </React.Fragment>
  )
}

export default App
