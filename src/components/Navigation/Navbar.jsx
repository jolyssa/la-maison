import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <nav className={`fixed w-full ${isHomePage ? 'bg-white/40 backdrop-blur-sm' : 'bg-white/95'} z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className={`text-2xl font-serif ${isHomePage ? 'text-white sm:text-gray-900' : 'text-gray-900'}`}>La Maison</Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/menu" className={`${isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'}`}>Menu</Link>
            <Link to="/reservations" className={`${isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} transition duration-300`}>Reservations</Link>
            <Link to="/about" className={`${isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} transition duration-300`}>About</Link>
            <Link to="/contact" className={`${isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} transition duration-300`}>Contact</Link>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} duration-300`}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/menu" className={`block px-3 py-2 ${isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} transition duration-300`}>Menu</Link>
            <Link to="/reservations" className={`block px-3 py-2 ${isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} transition duration-300`}>Reservations</Link>
            <Link to="/about" className={`block px-3 py-2 ${isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} transition duration-300`}>About</Link>
            <Link to="/contact" className={`block px-3 py-2 ${isHomePage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} transition duration-300`}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar