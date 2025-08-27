import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { GiClick } from "react-icons/gi";

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

const Projects = ({ property }: ProjectsProps) => {
    return (
        <section>
        <div>
            <Link href={`/property/${property.slug.current}`} className='block h-full'>
                <Card className='group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-gray-300 gap-0'>
                    <div className='relative h-60 w-full'>
                        <Image
                            src={urlFor(property.images && property.images[0]).url()}
                            alt={property.name}
                            layout='fill'
                            objectFit='cover'
                            className='group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg'
                        />
                    </div>

                    <CardHeader className='p-4'>
                        <CardTitle className='text-xl text-center font-extrabold text-gray-800'>
                            {property.name}
                        </CardTitle>

                        <CardContent className='text-center'>
                            <p className='text-lg font-bold text-gray-900'>
                                {property.price}
                            </p>

                            <Button className='mt-2'>More Details 
                                <GiClick size={30} 
                                className='text-yellow-500'/>
                            </Button>

                        </CardContent>
                    </CardHeader>
                </Card>
            </Link>

        </div>
    </section>
)

}

export default Projects
