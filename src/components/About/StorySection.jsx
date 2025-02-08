import { motion } from 'framer-motion'
import saumon from '../../assets/saumon.jpg'

const StorySection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-serif mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2015 by Chef Marie Laurent, La Maison brings the essence of contemporary French cuisine to Ottawa's vibrant culinary scene. Our philosophy is rooted in the marriage of traditional French techniques with local Canadian ingredients.
          </p>
          <p className="text-gray-600">
            Every dish tells a story of our commitment to excellence, showcasing the finest seasonal ingredients from local farmers and producers. Our wine cellar houses an extensive collection of both French and Canadian wines, carefully curated to complement our menu.
          </p>
        </div>
        <div className="relative h-96">
          <img
            src={saumon}
            alt="Sample from our past menus"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
          />

        </div>
      </div>
    </motion.div>
  )
}

export default StorySection