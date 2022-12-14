
import './App.css'
import { Card } from './Components/Card/Card'
import { InfoClima } from './Components/InfoClima/InfoClima'
import {Navbar} from './Components/Navbar/Navbar'
import app from './assets/image/weather-app.svg'


function App() {

  
  return (
    <div className="App">
      <Navbar />

      <InfoClima />
      
      <div className='fondo'></div>

    </div>
  )
}

export default App
