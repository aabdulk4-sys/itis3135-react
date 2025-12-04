import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <title>Ayah Abdulkareem | ITIS3135 Home Page</title>
      <main>
        <h2>ITIS 3135 Course Page</h2>
        <p>Hello and welcome! My name is Ayah Abdulkareem, a Computer Science student at UNC Charlotte concentrating in Human-Computer Interaction. I am passionate about technology, design, and exploring how people interact with digital tools in meaningful ways.
          This page serves as my central hub. Use the navigation links above to visit my ITIS3135 coursework (Home, Introduction, Contract, and more), check out my GitHub projects, or connect with me professionally.</p>
      </main>
      <Footer />
    </>
  )
}

export default App
