import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="/videos/cooking.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">La Maison</h2>
          <p className="text-xl md:text-2xl mb-8 font-light">Contemporary French Cuisine in the Heart of Ottawa</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
            <Link
              to="/reservations"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Reserve a Table
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-transparent bg-white text-base font-medium rounded-md text-gray-900 hover:bg-gray-50 transition-colors"
            >
              View Menu
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero