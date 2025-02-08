import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { convertSVGToPDF } from './MenuData'
import menuSVG from '../../assets/menu.svg'

const MenuViewer = () => {
  const handleDownload = async () => {
    try {
      await convertSVGToPDF()
    } catch (error) {
      console.error('Error downloading menu:', error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div 
        className="bg-[#f8f7f3] rounded-lg shadow-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-2xl font-serif text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Menu
        </motion.h2>

        <motion.div 
          className="w-full bg-[#f8f7f3] rounded-lg mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img 
            src={menuSVG} 
            alt="Restaurant Menu"
            className="w-full h-auto"
            style={{ maxHeight: '85vh' }}
          />
        </motion.div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Menu
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default MenuViewer