import React from 'react'
import { Link } from 'react-router-dom'

function Cancel() {
  return (
    <div className='text-neutral-300 text-center h-screen'>
      <strong className='text-3xl md:text-6xl'>You have cancelled your transaction.</strong>
      <Link className='underline block py-4' to='/'>Return to Home</Link>
    </div>
  )
}

export default Cancel