import React from 'react'
import { motion } from 'framer-motion'

const TeamSection = () => {
  const team = [
    {
      name: "Marie Laurent",
      role: "Executive Chef",
      image: "/api/placeholder/400/400",
      bio: "Trained in Paris, Chef Marie brings 15 years of culinary expertise."
    },
    {
      name: "Jean Dupont",
      role: "Sommelier",
      image: "/api/placeholder/400/400",
      bio: "With deep knowledge of French wines and local Canadian vintages."
    },
    {
      name: "Sophie Martin",
      role: "Pastry Chef",
      image: "/api/placeholder/400/400",
      bio: "Creating innovative desserts that honor French traditions."
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
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
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