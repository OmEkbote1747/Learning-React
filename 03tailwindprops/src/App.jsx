import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
// Here the fields 'subject' & 'rating' are props !!
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-2xl text-center mb-4">Tailwind Test</h1>
      <Card subject='Chemisty' rating='4.3' /> 
      <Card subject='Physics' rating='4.6' />
      <Card subject='Mathematics' rating='4.8' />
    </>
  )
}

export default App
