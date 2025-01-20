import React from 'react'
import loader from './Loader.gif'

export default function Spinner() {
  return (
    <div className="text-center">
        <img src={loader} alt='Loading.....'></img>
    </div>
  )
}
