"use client";
import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
};

  return (
    <div className='bg-myblack mx-auto text-white flex items-center relative'>

        {/*mobile navbar*/}
        <div className='container mx-auto flex items-center justify-between p-6 medium:hidden'>
            <div className='flex justify-items-start items-center text-lg font-bold font-rale tracking-widest'>Blogged<span className='text-mypurple font-bold'>In.</span></div>
            <div className='small:flex medium:hidden items-center justify-items-end'>
            <button  onClick={handleClick}>
            <Menu color="white" className={`flex transition-all duration-300 ease-out 
                    h-[20px] w-[40px]  ${isOpen ? 
                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}/>
       </button>
        </div>
        {/* Mobile Menu */}
      {isOpen && (
        <div className="medium:hidden bg-black  z-10 shadow-md p-4 absolute top-14 w-[325px] max-w-[430px]  mx-auto ml-3">
          <ul className="space-y-4 mx-auto font-eb items-center flex-col justify-center flex">
            <li><Link href="/" className="hover:text-mypurple font-eb tracking-widest">home</Link></li>
            <li><Link href="/about" className="hover:text-mypurple font-eb tracking-widest">about</Link></li>
            <li><Link href="/bloggallery" className="hover:text-mypurple font-eb tracking-widest">gallery</Link></li>
          </ul>
        </div>
      )}
        </div>
        
        {/*tablet nav*/}
        <div className='container mx-auto  items-center p-6 medium:flex hidden pt-10'>
        <div className='flex justify-items-start items-center text-2xl font-bold font-eb tracking-wider'>Blogged<span className='text-mypurple font-bold'>In.</span></div>
        <div className='justify-center flex items-center mx-auto '>
            <ul className=" mx-auto flex justify-between items-center w-[200px] font-normal ">
            <Link href="/" className="hover:text-mypurple font-eb tracking-widest">home</Link>
            <Link href="/about" className="hover:text-mypurple font-eb tracking-widest">about</Link>
            <Link href="/bloggallery" className="hover:text-mypurple font-eb tracking-widest">gallery</Link>
          </ul>
          </div>
        </div>
        
    </div>
  )
}

export default Navbar


//small:max-w-[430px] h-[60px] medium:max-w-[1535px]  large:max-w-[1728px]