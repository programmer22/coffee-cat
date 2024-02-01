import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../helpers/scrollToTop'
import teaItems from '../products/teaItems'
// clipper teas? 
function Teas() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className='bg-neutral-900 text-neutral-300'>
      <section className='text-center flex flex-col items-center'>
      <strong className='text-6xl py-2'>The Catalog</strong>
      <h3>All Products</h3>
      <ul className='flex flex-col md:flex-row md:max-w-screen-lg justify-center gap-2 flex-wrap'>
        <Link to='0'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={teaItems[0].title} src={teaItems[0].image}></img>
          <strong>{teaItems[0].title}</strong>
        </li>
        </Link>
        <Link to='1'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={teaItems[1].title} src={teaItems[1].image}></img>
          <strong>{teaItems[1].title}</strong>
        </li>
        </Link>
        <Link to='2'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={teaItems[2].title} src={teaItems[2].image}></img>
          <strong>{teaItems[2].title}</strong>
        </li>
        </Link>
        <Link to='3'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={teaItems[3].title} src={teaItems[3].image}></img>
          <strong>{teaItems[3].title}</strong>
        </li>
        </Link>
        <Link to='4'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={teaItems[4].title} src={teaItems[4].image}></img>
          <strong>{teaItems[4].title}</strong>
        </li>
        </Link>
        <Link to='5'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={teaItems[5].title} src={teaItems[5].image}></img>
          <strong>{teaItems[5].title}</strong>
        </li>
        </Link>
      </ul>
      <p>Page 1 of 1</p>
      </section>
    </div>
  )
}

export default Teas