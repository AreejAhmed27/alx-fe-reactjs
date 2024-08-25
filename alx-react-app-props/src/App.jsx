import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WelcomeMessage />
    <MainContent />

    <UserContext.Provider value = {userData}>
      <ProfilePage />
    </UserContext.Provider>
    <Counter />
    <UserProfile />
    <Footer />

    </>
  )
}

export default App
