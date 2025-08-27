"use client"

import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { GrMoney } from "react-icons/gr";
import { Button } from './ui/button';
import { MdAddCall } from "react-icons/md";

interface Props {
    name: string;
    description: string;
    images: string[];
    price: string;
    slug: {
        current: string;
    }
}

interface ProjectsProps {
    property: Props;
}

const PropertyDetails = ({ property }: ProjectsProps) => {
    return (
        <div className='mx-auto container flex flex-col md:flex-row gap-8 p-6 md:p-16'>
            <div>
                <Image
                    src={urlFor(property.images[0]).url()}
                    alt={property.name}
                    width={500}
                    height={300}
                />
            </div>

            <div className='md:w-1/2'>
                <h1 className='md:text-3xl text-2xl font-extrabold text-gray-900 md:py-4'>{property.name}</h1>
                {property.description && (
                    <p className='text-lg font-semibold text-gray-800 py-3 md:py-2'>
                        {property.description}
                    </p>
                )}
                <p className='flex gap-2 text-lg font-extrabold text-gray-800 mt-4'>
                    <GrMoney size={25} className=' text-amber-500'/>
                    {property.price}
                </p>

                <Button className='md:mt-10 mt-6'>For More Details <MdAddCall /> (123) 456-7890</Button>

            </div>

        </div>
    )
}


export default PropertyDetails