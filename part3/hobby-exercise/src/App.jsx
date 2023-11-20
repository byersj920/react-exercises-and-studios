import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HobbyIntroduction from './components/Introduction.jsx'
import MyProjects from './components/MyProjects.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>My Hobby: Dungeons & Dragons</h1>
        <HobbyIntroduction />
        <MyProjects />
      </div>
    </>
  )
}

export default App
