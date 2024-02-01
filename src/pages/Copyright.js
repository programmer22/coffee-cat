import React, { useEffect } from 'react'
import { scrollToTop } from '../helpers/scrollToTop'

function Copyright() {
    useEffect(() => {
        scrollToTop()
      },[])
  return (
    <div className='text-neutral-300 h-screen px-4'>
      <ul className='max-w-xl mx-auto'>
      <strong className='text-3xl md:text-6xl block py-4'>Copyright Notice</strong>

Last Updated: 2023-09-21
<br></br>
1. Ownership

All content on CoffeeCat, including text, graphics, logos, and software, is protected by copyright and owned by CoffeeCat or its respective content providers.
<br></br>
2. Use of Content

You may not copy, reproduce, modify, distribute, or use any content from CoffeeCat without our prior written consent, unless such use is expressly allowed under applicable copyright laws.
<br></br>
3. Reporting Copyright Infringement

If you believe that your copyrighted work has been used on CoffeeCat without authorization, please contact us at jordanayotte13@outlook.com.

Thank you for respecting our copyright. Enjoy your time on CoffeeCat!
      </ul>
    </div>
  )
}

export default Copyright