import Hero from '../components/Home/Hero'
import InfoCards from '../components/Home/InfoCards'

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="relative -mt-51">
        <InfoCards />
      </div>
    </div>
  )
}

export default Home