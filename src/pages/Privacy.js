import React, { useEffect } from 'react'
import { scrollToTop } from '../helpers/scrollToTop'

function Privacy() {
    useEffect(() => {
        scrollToTop()
      },[])
  return (
    <div className='text-neutral-300 px-4'>
      
      <ul className='max-w-xl mx-auto py-4'>
      <strong className='text-3xl md:text-6xl block py-4'>Privacy Policy</strong>
      <li><strong>1. Introduction: </strong>

            Welcome to CoffeeCat! This website is intended for fun and as a personal project. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy is designed to inform you about how we collect, use, disclose, and safeguard your information when you interact with our website.

            By using CoffeeCat, you agree to the practices described in this Privacy Policy. Please take a moment to read this Privacy Policy carefully to make informed decisions about sharing your information with us.
        </li>
        <li>
            <strong>2. Information We Collect: </strong>

            We may collect the following types of information:

            2.1. Log Data: When you visit CoffeeCat, our servers may automatically record information about your visit. This may include your IP address, browser type, the pages you access, and the date and time of your visit.

            2.2. Cookies and Tracking Technologies: We may use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and improve our services. You can manage your cookie preferences through your browser settings.

            2.3. User-Provided Information: You may choose to provide us with information, such as your name or email address, when using certain features of our website. This information is voluntary and may be collected when you interact with our website in specific ways, such as signing up for newsletters or contacting us.
        </li>
        <li>
            <strong>3. How We Use Your Information: </strong>

            We use the information we collect for the following purposes:

            3.1. Improving Our Website: We use data to analyze how our website is used, identify areas for improvement, and enhance your overall experience.

            3.2. Communication: If you provide your email address or other contact information, we may use it to respond to your inquiries, send updates about our project, or send you occasional messages related to our website.
        </li>
        <li>
            <strong>4. Sharing Your Information: </strong>

            We do not sell, trade, or rent your personal information to third parties. Your information is used solely for the purposes described in this Privacy Policy and for the operation of CoffeeCat.
            </li>
            <li>
            <strong>5. Your Choices: </strong>

            You have the following choices regarding your information:

            5.1. Access and Correction: You may contact us to access, correct, or update any personal information you have provided to us.

            5.2. Opt-Out: If you no longer wish to receive communications from us, you can unsubscribe or opt-out by following the instructions provided in our messages or by contacting us.
            </li>
            <li>
            <strong>6. Security: </strong>

            We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, please be aware that no data transmission over the internet can be guaranteed to be 100% secure.
            </li>
            <li>
            <strong>7. Changes to this Privacy Policy: </strong>

            We may update this Privacy Policy from time to time. Any changes will be posted on our website, and the revised Privacy Policy will be effective when posted.
            </li>
            <li>
            <strong>8. Contact Us: </strong>

            If you have any questions, concerns, or requests related to this Privacy Policy or your personal information, please contact us at jordanayotte13@outlook.com.

            Thank you for visiting CoffeeCat! Your privacy is important to us, and we appreciate your support of our project.
            </li>
            <strong>CoffeeCat</strong>
            <p>coffeecat@coffee.com</p>
      </ul>
    </div>
  )
}

export default Privacy