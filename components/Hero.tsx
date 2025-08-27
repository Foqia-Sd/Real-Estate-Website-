import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <section className='rounded bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] py-8 sm:py-12 mt-8 mx-auto container'>
        <div className='mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2'>
          <div className='max-w-md space-y-4'>
            <p className='text-neutral-600 font-semibold'>Welcome to Real Estate!</p>
            <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
              Find Your Dream Home
            </h2>
            <p className='text-neutral-700'>
              Discover the best properties in your area and find your perfect home. You will have everything nearby supermarket, buses, station, the Carmen neighborhood, etc.
            </p>
            <Button className='inline-flex items-center justify-center rounded-full px-6 py-3'>Get Started</Button>

          </div>

          <Image
            src={"/images/banner.png"}
            alt='Banner Image'
            width={450}
            height={450}
          />

        </div>
      </section>
    </div>
  )
}

export default Hero