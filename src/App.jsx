import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import { Outlet, useNavigation } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navigation  = useNavigation();

  return (
    <div className="px-5 pt-5">
      <Header></Header>
      
      <div>{navigation.state === 'loading' && 'Loading...' }</div>
      <Outlet></Outlet>
    </div>
  )
}

export default App
