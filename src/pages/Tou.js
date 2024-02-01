import React, { useEffect } from 'react'
import { scrollToTop } from '../helpers/scrollToTop'

function Tou() {
    useEffect(() => {
        scrollToTop()
      },[])
  return (
    <div className='text-neutral-300 h-screen px-4'>
      <ul className='max-w-xl mx-auto'>
      <strong className='text-3xl md:text-6xl block py-4'>Terms Of Use</strong>
1. Acceptance of Terms: 

By using CoffeeCat, you agree to abide by these simple terms:
<br></br>
2. Permitted Use: 

Enjoy CoffeeCat for personal fun and exploration, but please don't use it for commercial purposes.
<br></br>
3. Respectful Content: 

Be respectful when posting or submitting content, and avoid anything offensive or harmful.
<br></br>
4. Privacy: 

Your use of CoffeeCat is governed by our Privacy Policy.
<br></br>
5. Intellectual Property: 

You can't copy or use any content from CoffeeCat without our permission.
<br></br>
6. Changes and Termination: 

We may change these terms or terminate your access at any time.
<br></br>
7. Contact Us: 

If you have questions, reach out to us at jordanayotte13@outlook.com.

Thanks for being a part of our fun project! Enjoy!
      </ul>
    </div>
  )
}

export default Tou