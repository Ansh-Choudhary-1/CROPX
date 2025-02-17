import { Sprout, Target } from 'lucide-react'
import React from 'react'

const team = [
  {
    name: "Ansh Chaudhary",
    role: "Fullstack Developer",
    img: "https://w0.peakpx.com/wallpaper/961/507/HD-wallpaper-sung-jin-woo-solo-leveling-thumbnail.jpg",
    desc: "Ansh is a fullstack developer with a passion of building feasable things. He is dedicated to creating innovative solutions.",
  },
  {
    name: "Diya kukreja",
    role: "AI Developer",
    img: "https://static0.srcdn.com/wordpress/wp-content/uploads/2022/03/Jujutsu-Kaisen-Maki.jpg",
    desc: "Diya is an AI developer with a passion for machine learning and AI. She is dedicated to creating innovative solutions.",
  },
  {
    name: "Keshav",
    role: "Frontend Developer",
    img: "https://m.media-amazon.com/images/M/MV5BMmIxOTE0ZjMtMDliMy00OTNjLWI5YmMtOTRjN2ZiMzJjOTU4XkEyXkFqcGc@._V1_.jpg",
    desc: "Keshav is a frontend developer with a passion for design and user experience. He is dedicated to creating innovative."
  },
  {
    name: "Ayush Kumar",
    role: "Fullstack Developer",
    img: "https://a.storyblok.com/f/178900/960x540/6e6bcda041/demon-slayer.jpg/m/filters:quality(95)format(webp)",
    desc: "Ayush is"
  }
]

function About() {
  return (
    <div className='bg-white'>


      <div className='relative bg-green-800 py-24'>
        <div className='absolute inset-0 z-0'>
          <img 
          className='w-full h-full opacity-30 object-cover'
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="background"/>
        </div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center'>
           <h1 className='text-4xl poppins-extrabold tracking-tight text-white sm:text-5xl md:text-6xl'>About AGRISMART</h1>
           <p className='mt-6 max-w-3xl mx-auto text-xl text-green-100'>Transform Farming practises with knowledge and Technology.</p>
        </div>
      </div>

      {/* Mission and vision */}
      <div className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>

             <div className='space-y-4'>
            <div className='flex items-center space-x-4'>
              <Target className='w-10 h-10 text-green-600'/>
              <h2 className='text-3xl poppins-bold text-gray-900'>Our Mission</h2>
            </div>
            <p className='text-lg text-gray-600'>To empower Indian farmers with the cutting-edge technology, data-driven solutions through this enabling them to better decision for their crop. Increasing productivity,detecting crop disease and achieve financial prosperity while promoting sustainable agriculture.

            </p>
            </div>

            <div className='space-y-4'>
            <div className='flex items-center space-x-4'>
              <Sprout className='w-10 h-10 text-green-600'/>
              <h2 className='text-3xl poppins-bold text-gray-900'>Our Vision</h2>
            </div>
            <p className='text-lg text-gray-600'>To create a future where every Indian farmer has access to advanced agricultural 
                technology, fair market prices, and financial security, leading to a 
                transformed and prosperous agricultural sector.

            </p>
            </div>

          </div>

        </div>

      </div>

{/* Why Choose Us */}
<div className='py-16 bg-gray-100'>
  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
    <h2 className='text-3xl poppins-bold text-center text-gray-900'>Why Choose AgriSmart?</h2>
    <p className='mt-4 max-w-3xl mx-auto text-lg text-center text-gray-600'>
      AgriSmart stands out because of our dedication to innovation, sustainability, and farmer empowerment.
    </p>

    <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
      {[
        { title: "AI-Powered Insights", desc: "Get real-time crop health analysis using AI and machine learning." },
        { title: "Weather & Soil Data", desc: "Make informed decisions with accurate weather and soil reports." },
        { title: "Market Connectivity", desc: "Sell your produce at the best price with smart market insights." },
        { title: "Financial Security", desc: "Secure your future with crop insurance and financial planning." },
        { title: "Various features", desc: "Various features and mentioned features are in development." },
      ].map((feature, index) => (
        <div key={index} className='p-6 bg-white rounded-lg shadow-md'>
          <h3 className='text-xl poppins-bold text-green-700'>{feature.title}</h3>
          <p className='mt-2 text-gray-600'>{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  
  {/* Team Section */}
  <div className='bg-gray-50 py-16'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-3xl poppins-bold text-center text-gray-900 mb-12 '>Our Leadership Team</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {team.map((member,index) => (
          <div key={index} className='bg-white rounded-lg p-6 shadow-lg'>
            <img 
            src={member.img}
            alt={member.name}
            className='w-20 h-20 rounded-full mx-auto mb-4 object-cover '/>
            <h3 className='text-xl poppins-bold text-gray-900 text-center'>{member.name}</h3>
            <p className='text-green-600 text-center mb-4 '>{member.role}</p>
            
            
          </div>
        ))}

      </div>

    </div>

  </div>
{/* FAQ Section */}
  <div className="space-y-4">
  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-5 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-sm font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
      recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
      consequuntur distinctio corporis earum similique!
    </p>
  </details>

  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
      recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
      consequuntur distinctio corporis earum similique!
    </p>
  </details>
</div>






    </div>
  )
}

export default About

