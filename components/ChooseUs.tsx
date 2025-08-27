import React from 'react'
import { FaMapMarkerAlt, FaHandshake } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";

const ChooseUs = () => {
  return (
    <section className='mt-20 ml-6 mr-6'>
        <div className='text-center tracking-tight items-center justify-center'>
            <h2 className='text-2xl md:text-3xl font-bold'>Why Choose Us?</h2>
            <p className='text-neutral-600 mt-2 font-semibold'>
                Elevating Your Home Buying Experience with Expertise, Integrity,
                and Unmatched Personalized Service
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 mx-auto container'>
            <div className='border p-4 bg-[#DDC7BB] rounded-lg'>
                <FaMapMarkerAlt size={30}/>
                <h3 className='font-semibold mt-4'>Expert Guidance</h3>
                <p className='text-neutral-600 mt-2'>Benefit from our team seasoned expertise for a smooth buying experience</p>
            </div>
            <div className='border p-4 bg-[#DDC7BB] rounded-lg'>
                <MdMiscellaneousServices  size={30} />
                <h3 className='font-semibold mt-4'>Personalized Service</h3>
                <p className='text-neutral-600 mt-2'>Our services adapt to your unique needs, making your journey stress free</p>
            </div>
            <div className='border p-4 bg-[#DDC7BB] rounded-lg'>
                <GrDocumentText size={30} />
                <h3 className='font-semibold mt-4'>Transparent Process</h3>
                <p className='text-neutral-600 mt-2'>Stay informed with our clear and honest approach to buying your home.</p>
            </div>
            <div className='border p-4 bg-[#DDC7BB] rounded-lg'>
                <FaHandshake  size={30} />
                <h3 className='font-semibold mt-4'>Exceptional Support</h3>
                <p className='text-neutral-600 mt-2'>Our team is dedicated to providing you with the best support throughout your journey.</p>
            </div>

        </div>

    </section>
  )
}

export default ChooseUs