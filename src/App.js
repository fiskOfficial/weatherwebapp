import './App.css';
import React from 'react'
import Header from './Header.js';
import Nav from './Nav';
import Forecast from './Forecast';
import CurrentLocation from './CurrentLocation'


export default function App() {
  return (
    <div>
      <Nav />
      <Header />
    <div className='grid'>
      <CurrentLocation />
      <Forecast />
      </div>
    </div>
  )
}

