import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#DDC7BB]  mt-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-10'>
            {/* column 1 */}
            <div>
                <h3 className='text-lg font-bold mb-2'>Madina Builders</h3>
                <p >Real Estate</p>
                <p>Construction</p>
                <p>Dream Home</p>
            </div>

            {/* column 2 */}
            <div>
                <h3 className='text-lg font-bold mb-2'>Quick Links</h3>
                <p>About Us</p>
                <p>Contact</p>
                <p>Privacy Policy</p>
            </div>

            {/* column 3 */}
            <div>
                <h3 className='text-lg font-bold mb-2'>Follow Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>

            {/* column 4 */}
            <div>
                <h3 className='text-lg font-bold mb-2'>Contact Us</h3>
                <p>Email: info@madinabuilders.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Main St, Anytown, USA</p>
            </div>

        </div>

        <div className=' py-4 text-center'>
            <p>&copy; 2023 Madina Builders. All rights reserved.</p>
        </div>

    </footer>
  )
}

export default Footer