import { motion } from 'framer-motion'
import marieLaurent from '../../assets/marie.jpg'  // adjust file extension as needed
import jeanDupont from '../../assets/jean.jpg'
import sophieMartin from '../../assets/sophie.jpg'

const TeamSection = () => {
  const team = [
    {
      name: "Marie Laurent",
      role: "Executive Chef",
      image: marieLaurent,
      bio: "With roots in Lyon's culinary heartland, Chef Marie Laurent brings her grandmother's cherished recipes and 15 years of Michelin-starred expertise to our kitchen. After training under Chef Paul Bocuse and leading kitchens across France, she now crafts our menu with a perfect balance of tradition and innovation."
    },
    {
      name: "Jean Dupont",
      role: "Sommelier",
      image: jeanDupont,
      bio: "A graduate of the Wine & Spirit Education Trust, Jean has spent two decades cultivating relationships with vintners throughout France and the Okanagan Valley. His thoughtfully curated wine list reflects both his European heritage and his passion for emerging Canadian wines."
    },
    {
      name: "Sophie Martin",
      role: "Pastry Chef",
      image: sophieMartin,
      bio: "Following her apprenticeship at Paris's famed Lenôtre, Sophie spent years perfecting her craft in the kitchens of Monaco and Provence. Her desserts marry classic French techniques with seasonal local ingredients, creating memorable final notes to every meal."
    }
  ]

  return (
    <div className="bg-gray-50 py-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-3xl font-serif text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 relative">
                <div className="absolute left-0 top-0 w-0 h-[1px] bg-gray-200 group-hover:w-full transition-all duration-500" />
                <h3 className="text-xl font-serif mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default TeamSection