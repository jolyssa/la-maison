import { Clock, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const InfoCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <InfoCard
        Icon={Clock}
        title="Hours"
        content={
          <>
            <span className="font-bold">Tue - Thu:</span> 5:30pm - 10:00pm<br />
            <span className="font-bold">Fri - Sat:</span> 5:30pm - 11:00pm<br />
            <span className="font-bold">Sun:</span> 5:00pm - 9:30pm
          </>

        }
      />
      <InfoCard
        Icon={MapPin}
        title="Location"
        content={
          <>
            123 Sussex Drive<br />
            Ottawa, ON K1N 5T7<br />
            Canada
          </>
        }
      />
      <InfoCard
        Icon={Phone}
        title="Contact"
        content={
          <>
            (613) 555-0123<br />
            info@lamaisonottawa.ca<br />
            <Link to="/reservations" className="text-gray-900 hover:underline">
              Make a Reservation
            </Link>
          </>
        }
      />
    </div>
  )
}

const InfoCard = ({ Icon, title, content }) => (
  <div className="bg-white/50 p-6 rounded-t-lg shadow-lg">
    <Icon className="h-8 w-8 text-gray-900 mb-4" />
    <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700">{content}</p>
  </div>
)

export default InfoCards