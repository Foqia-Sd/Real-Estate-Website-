import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import React from 'react'
import Projects from './Projects'

const Card = async () => {
    const properties = await client.fetch(groq`*[_type == "property"] `)

    return (
        <section className='mr-6 ml-6'>
            <div className='mt-24 mx-auto container gap-2'>
                <p className='text-neutral-600 font-semibold'>Best Projects of the years</p>
                <h2 className='text-2xl font-bold tracking-tight md:text-4xl'>
                    Our Recent Projects
                </h2>
            </div>

            {/* Projects Section */}
            <div className="mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {properties.map((property: any, index: number) => (
                    <Projects key={index} property={property} />
                ))
                }
            </div>

        </section>
    )
}

export default Card