import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Newsletter = () => {
  return (
    <div>
      <section className='rounded bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] py-8 sm:py-12 mx-auto container mt-20'>
        <div className='mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2'>
          <div className='max-w-md space-y-4'>
            <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
              Subscribe Our Newsletter
            </h2>
            <p className='text-lg text-neutral-700'>
              Stay updated with the latest news and offers from the real estate market. 
              Subscribe now and never miss an update!      
            </p>

            <div className='md:flex flex-1'>
                <input 
                type='email' 
                placeholder=' Enter your email' 
                className='bg-white p-1 rounded-full border px-6 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <Button className='flex items-center justify-center rounded-full px-8 py-4 mt-2 md:mt-0'>Subscribe</Button>                
            </div>
          </div>
            

          <Image
            src={"/images/news.png"}
            alt='Banner Image'
            width={450}
            height={450}
          />

        </div>
      </section>
    </div>
  )
}

export default Newsletter