import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
     <div className="bg-[#191919] text-white min-h-screen flex flex-col items-center justify-center px-6 py-10">
      <div className="max-w-4xl text-center">
        {/* Header Section */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 font-eb mt-6">
          About <span className="text-[#7C4EE4]">Us</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 font-rale py-6">
        Welcome to BloggedIn, the best place to find ideas, insights, and captivating tales. Through inspiring, instructive, and entertaining content, we are committed to bridging minds.
        </p>

        {/* Mission Section */}
        <div className="bg-[#252525] p-6 rounded-lg shadow-lg mb-8 mt-20">
          <h2 className="text-3xl font-semibold text-[#7C4EE4] mb-4 font-eb ">Our Mission</h2>
          <p className="text-gray-400 font-rale">
          Our goal at BloggedIn is to establish a space where creativity is unrestricted, voices are heard, and ideas are allowed to freely flow. We support enabling authors and readers to express their distinct viewpoints.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-[#252525] p-6 rounded-lg shadow-lg mt-8 ">
          <h2 className="text-3xl font-semibold text-[#7C4EE4] mb-4 font-eb">Our Vision</h2>
          <p className="text-gray-400 font-rale">
          We envision a world where everyone is connected by stories, where every voice counts and every article starts a dialogue. Our platform is designed to encourage everyone to work together, be inclusive, and be creative.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-20 text-center mb-20">
        <h3 className="text-xl font-semibold mb-2 font-eb">Join Us on Our Journey</h3>
        <p className="text-gray-400 mb-4 font-rale">
        Join our expanding community and make your opinion known.
        </p>
        <Link
          href="#"
          className="bg-[#7C4EE4] hover:bg-[#5f3bb5] text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>
  )
}

export default About