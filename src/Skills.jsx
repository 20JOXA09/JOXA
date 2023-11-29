import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import img from '../src/img/coding.jpg'
import rasm13 from '../src/img/images.png'
import './App.css'
import './About.jsx'
import './Home.jsx'
import './Contact.jsx'
import './Service.jsx'
import Skills from './Skills'

function Skill() {
  const [count, setCount] = useState(0)

  return (
   <React.Fragment>
    <div className="container">
  <div className="nav">
    <h3 className='J'>JoXa</h3>
  <h3 className='X'>Xolmirzayev</h3>
  <ul className='group-list'>
  <li className='nav-item'>
    <a className='H' href="/">Home</a>
    <a className='A' href="/about">About</a>
    <a className='C' href="/skills">Skills</a>
    <img className='rasm13' src={rasm13} alt="" />
  </li>
</ul>
    <button className='btn'>Contact</button>
    <button className='btn2'>Ism</button>
    <button className='btn3'>Fio</button>
  </div>
  <div className="con">
  <p className='name'>Hi, my name is</p>
  <h1 className='J2'>JoXa</h1>
  <h1 className='X2'>Xolmirzayev</h1>
  <p className='name2'>I'm Front end developer and school student</p>
  <img className='img1' src={img} alt="" />
  </div>
</div>
   </React.Fragment>
  )
}

export default Skill
