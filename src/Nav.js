import React from 'react'
import "./Nav.css"

export default function Nav() {
  return (
    <div className='navContainer'>
      <div className='nav' >
        <a href='www.ggogle.com'>Home</a>
        <input type={"text"} placeholder={"Search for location"} className="search"></input>
        </div> 
    </div>
  )
}
