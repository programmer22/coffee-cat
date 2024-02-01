import React from 'react'
import { Link } from 'react-router-dom'

function CartItem({cartItemData, setShoppingCartActive}) {
  return (
    <li className='flex flex-col items-center'>
      <img alt={cartItemData.title} src={cartItemData.image} className="w-full h-32 object-contain"></img>
      <strong>{cartItemData.title} ({cartItemData.quantity})</strong>
      <Link to='/checkout' onClick={() => setShoppingCartActive(false)} className='block text-sm text-neutral-300 font-extrabold underline'>Edit / Remove</Link>
    </li>
  )
}

export default CartItem