import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/xeoezldv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif mb-6">Contact Us</h2>
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-gray-600 mr-4" />
              <div>
                <h3 className="font-medium mb-1">Address</h3>
                <p className="text-gray-600">123 Sussex Drive<br />Ottawa, ON K1N 5T7</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-gray-600 mr-4" />
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-gray-600">(613) 555-0123</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-gray-600 mr-4" />
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray-600">info@lamaisonottawa.ca</p>
              </div>
            </div>
          </div>
          
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.419741960276!2d-75.7007195!3d45.4215296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04ff4fe494ef%3A0x26bb54f60c29f6e!2sSussex+Dr%2C+Ottawa%2C+ON!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="text-green-600 mb-4">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}
            
            {status === 'error' && (
              <div className="text-red-600 mb-4">
                There was an error sending your message. Please try again.
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
              disabled={status === 'success'}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactForm
