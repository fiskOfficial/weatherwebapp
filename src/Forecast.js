import React from 'react'
import "./Forecast.css"
import Day from './Day'

export default function Forecast() {
  return (
    <div className='forecast'>
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
    </div>
  )
}
