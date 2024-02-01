import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../helpers/scrollToTop'
import coffeeItems from '../products/coffeeItems'

function Coffees() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className='bg-neutral-900 text-neutral-300'>
      <section className='text-center flex flex-col items-center'>
      <strong className='text-6xl py-2'>Cat Café</strong>
      <h3>All Products</h3>
      <ul className='flex flex-col md:flex-row md:max-w-screen-lg justify-center gap-2 flex-wrap'>
        <Link to='0'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full object-cover' alt={coffeeItems[0].title} src={coffeeItems[0].image}></img>
          <strong>{coffeeItems[0].title}</strong>
        </li>
        </Link>
        <Link to='1'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={coffeeItems[1].title} src={coffeeItems[1].image}></img>
          <strong>{coffeeItems[1].title}</strong>
        </li>
        </Link>
        <Link to='2'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={coffeeItems[2].title} src={coffeeItems[2].image}></img>
          <strong>{coffeeItems[2].title}</strong>
        </li>
        </Link>
        <Link to='3'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={coffeeItems[3].title} src={coffeeItems[3].image}></img>
          <strong>{coffeeItems[3].title}</strong>
        </li>
        </Link>
        <Link to='4'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={coffeeItems[4].title} src={coffeeItems[4].image}></img>
          <strong>{coffeeItems[4].title}</strong>
        </li>
        </Link>
        <Link to='5'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={coffeeItems[5].title} src={coffeeItems[5].image}></img>
          <strong>{coffeeItems[5].title}</strong>
        </li>
        </Link>
        <Link to='6'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={coffeeItems[6].title} src={coffeeItems[6].image}></img>
          <strong>{coffeeItems[6].title}</strong>
        </li>
        </Link>
        <Link to='7'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={coffeeItems[7].title} src={coffeeItems[7].image}></img>
          <strong>{coffeeItems[7].title}</strong>
        </li>
        </Link>
        <Link to='8'>
        <li className='w-72 h-96 flex flex-col justify-evenly p-4'>
          <img className='h-3/4 w-full' alt={coffeeItems[8].title} src={coffeeItems[8].image}></img>
          <strong>{coffeeItems[8].title}</strong>
        </li>
        </Link>
      </ul>
      <p>Page 1 of 1</p>
      </section>
    </div>
  )
}

export default Coffees