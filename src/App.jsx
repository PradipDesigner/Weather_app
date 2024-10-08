import reactLogo from './assets/react.svg'
import humadityLogo from './assets/humidity.png'
import windLogo from './assets/wind.png'
import './App.css'
import Weather from './components/weather'
function App() {

  return (
    <>
      <Weather humadityIcon={humadityLogo} windIcon={windLogo} />
    </>
  )
}

export default App
