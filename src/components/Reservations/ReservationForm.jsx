import React, { useState } from 'react'
import { Calendar, Clock, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  })
  
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        'service_jghougk', // Get this from EmailJS
        'template_0e8v9rd', // Get this from EmailJS
        {
          date: formData.date,
          time: formData.time,
          guests: formData.guests,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          special_requests: formData.specialRequests
        },
        'TnDj3NAwseYc3flZ3' // Get this from EmailJS
      )

      setStatus('success')
      setFormData({
        date: '',
        time: '',
        guests: '2',
        name: '',
        email: '',
        phone: '',
        specialRequests: ''
      })
    } catch (error) {
      console.error('Error sending reservation:', error)
      setStatus('error')
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <motion.div 
        className="bg-white rounded-lg shadow-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-2xl font-serif mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Make a Reservation
        </motion.h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 py-3"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="time"
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 py-3"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 py-3"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  required
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 py-3"
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
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 py-3"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 py-3"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests
              </label>
              <textarea
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                rows="3"
                value={formData.specialRequests}
                onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
              ></textarea>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
            >
              Request Reservation
            </button>
            <p className="mt-4 text-sm text-gray-600 text-center">
              For parties larger than 8, please call us at (613) 555-0123
            </p>
          </motion.div>
        </form>

        {status === 'sending' && (
          <p className="mt-4 text-center text-blue-600">
            Sending your reservation...
          </p>
        )}
        {status === 'success' && (
          <p className="mt-4 text-center text-green-600">
            Reservation request sent successfully! We'll contact you shortly to confirm.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-red-600">
            There was an error sending your reservation. Please try again or call us directly.
          </p>
        )}
      </motion.div>
    </div>
  )
}

export default ReservationForm