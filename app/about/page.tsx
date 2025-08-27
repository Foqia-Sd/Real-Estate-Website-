import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

const aboutPage = () => {
    return (
        <section>
            <Navbar />
            <div className='text-center mt-10 ml-6 mr-6 md:py-10'>
                <h1 className='text-2xl md:text-4xl font-bold tracking-tight'>
                    We are a global, boutique real estate brokerage
                </h1>
            </div>

            <div className='flex flex-col md:flex-row justify-between mt-14 mx-auto container'>
                <div className='md:w-1/2 md:mx-16 md:mt-4 px-4'>
                    <h3 className='text-2xl md:text-3xl font-bold'>The transfer of real estate</h3>
                    <p className='font-normal py-4'>
                        Our team of experts is dedicated to guiding you through every step of
                        the process, ensuring a seamless and successful transaction. With years
                        of industry experience, we combine local knowledge with global insights
                        to provide unmatched service and expertise in real estate. Whether you are
                        buying, selling, or investing, our mission is to deliver exceptional results
                        and build long-term relationships based on trust.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 mb-10 mt-10">
                        <Button className="px-8 py-6 text-white rounded-full font-semibold hover:bg-gray-800 transition">
                            Book Now!
                        </Button>
                        <Button variant="outline" className="px-8 py-6 rounded-full font-semibold hover:bg-gray-100 transition">
                            Read More
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-10 mt-4 mb-8">
                        <div>
                            <h4 className="md:text-5xl text-2xl font-bold">12+</h4>
                            <p className="text-gray-600">Customers</p>
                        </div>
                        <div>
                            <h4 className="text-2xl md:text-5xl font-bold">14+</h4>
                            <p className="text-gray-600">Offices</p>
                        </div>
                        <div>
                            <h4 className="text-2xl md:text-5xl font-bold">10+</h4>
                            <p className="text-gray-600">Students</p>
                        </div>
                    </div>
                

            </div>

            <div className='px-4'>
                <Image
                    src={"/images/about.png"}
                    alt='About Us'
                    width={500}
                    height={500}
                />
            </div>

        </div>
        
        <Newsletter />
        <Footer />

        </section >
    )
}

export default aboutPage