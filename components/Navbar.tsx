import Link from 'next/link'
import React from 'react'
import { FaBuildingColumns } from "react-icons/fa6";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';


const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-gray-50 shadow-md rounded-bl-full'>
    <div className='container mx-auto flex items-center justify-between py-4 px-8 '>
        <Link href="/" className='text-xl font-bold hover:text-blue-600'>
          <FaBuildingColumns className='inline-block mr-2' />
          Madina Builders
          <p className='text-sm text-gray-500 px-8'>
            Your Trusted Partner
        </p>
        </Link>

        <div className='hidden md:flex space-x-6 font-semibold'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"} className='hover:text-blue-600'>
            About
            </Link>
        </div>

        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger>
              <Menu size={24}/>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <ul className='flex flex-col gap-3 p-4'>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>

                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
              
            </SheetContent>
          </Sheet>
        </div>

    </div>
    </nav>
  )
}

export default Navbar