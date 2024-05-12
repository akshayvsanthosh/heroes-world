import './App.css'
import CaptainAmerica from './Components/CaptainAmerica'
import Heroes from './Components/Heroes'
import Home from './Components/Home'
import Thor from './Components/Thor'
import BlackPanther from './Components/BlackPanther'
import Footer from './Components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax';
import Slider from './Components/Slider'


function App() {

  return (
    <ParallaxProvider>
      <Home />
      <Heroes />
      <CaptainAmerica />
      <Thor />
      <BlackPanther />
      <Slider/>
      <Footer />
    </ParallaxProvider>
  )
}

export default App
