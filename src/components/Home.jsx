import React from 'react'
import FlickeringGrid from './magicui/flickering-grid'
import AnimatedGradientText from './magicui/animated-gradient-text'
import LineShadowText from './magicui/line-shadow-text'
import SquishyCard from './features'
import Marquee from './magicui/marquee'

const Card = ({ name, feedback, location }) => (
    <div className="w-80 bg-green-100 rounded-lg shadow-lg p-6 text-center mx-4">
      <p className="text-lg italic text-gray-700">"{feedback}"</p>
      <h3 className="mt-4 text-green-700 font-semibold">{name}</h3>
      <span className="text-sm text-gray-500">{location}</span>
    </div>
  );
  

function Home() {
    const testimonials = [
        {
          Name: "Sara kumar",
          feedback: "This platform transformed my farming. AI insights boosted my crop yield by 30%!",
          location: "Bihar, India",
        },
        {
          name: "Nonu Chaudhary ",
          feedback: "Weather predictions are spot on. It helped me avoid major losses this season.",
          location: "Maharashtra, India",
        },
        {
          name: "Abeer panwar",
          feedback: "I love the smart advisory. It provides the best recommendations for my crops.",
          location: "UP, India",
        },
        {
          name: "Sankalp kumar ",
          feedback: "Market access is amazing! I sold my produce at great prices directly to buyers.",
          location: "Haryana, India",
        },
        
        
        
      ];



  return (

    
    <>
 

         <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
    {/* Flickering Background */}
    <div className="absolute inset-0 z-0">
      <FlickeringGrid
        squareSize={4}
        gridGap={20}
        flickerChance={0.3}
        color="rgb(0, 0, 0)"
        width={window.innerWidth}
        height={window.innerHeight}
        maxOpacity={0.2}
      />
    </div>

   
    {/* Hero Section */}
    <div className="absolute top-[10%] z-10 flex flex-col items-center justify-center text-center w-full px-6 ">
    <AnimatedGradientText className="mb-12">ProductivityX100</AnimatedGradientText>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl poppins-extrabold text-gray-900 ">
         <LineShadowText className="">Smart</LineShadowText> <span className="block poppins-extrabold"> Solutions for</span>
          <span className="block text-green-600 poppins-extrabold">Indian Farmers</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Empowering farmers with AI-driven solutions for better crop management, market access, and financial security.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4">
          <button className="px-8 py-3 text-lg poppins-medium text-white bg-green-600 rounded-md hover:bg-green-700">
            Get Started
          </button>
          <button className="px-8 py-3 text-lg poppins-medium text-green-600 bg-green-100 rounded-md hover:bg-green-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>




   {/* Features Section */}
   <div id="features">
    <SquishyCard/>
    </div>

   {/* Testimonials Section */}
   <div id="testimonials" className='py-12 bg-white'>
    <div className='max-w-7xl mx-auto px-4 lg:px-8 sm:px-6'>
        <h2 className='text-3xl poppins-extrabold text-center text-gray-900 sm:text-4xl'>
         Trusted by Farmers Across India
        </h2>

        <Marquee className="mt-8" pauseOnHover={true} reverse={false} repeat={2}>
        {testimonials.map((testimonial, index) => (
            <Card key={index} name={testimonial.name} feedback={testimonial.feedback} location={testimonial.location} />
          ))}
        </Marquee>
    </div>
   </div>

   
  
    </>
  )
}

export default Home