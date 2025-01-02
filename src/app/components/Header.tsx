"use client";
import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Animation runs only once
    });
  }, []);
  return (
    <div className='bg-myblack small:h-[272px] small:max-w-[430px] medium:h-[180px] medium:max-w-[1535px] large:h-[200px] large:max-w-[1728px] mx-auto text-white py-10'>
        <div className='flex justify-center items-center py-8 flex-col gap-6 '>
            <h1 className='medium:text-4xl small:text-5xl font-extrabold tracking-wider text-white font-eb' data-aos="fade-down">Experience <br className='medium:hidden'/><span className='text-mypurple'> In<br className='medium:hidden'/></span> The Blog</h1>
            <h5 className='hover:text-mypurple font-rale' data-aos="fade-down" data-aos-delay="200">Your Hub for Online Stories</h5>
            <div className='w-[130px] h-[0.2px] bg-white' ></div>

        </div>
    </div>
  )
}

export default Header