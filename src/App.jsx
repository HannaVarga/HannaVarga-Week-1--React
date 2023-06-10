import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Hompage from './Hompage'

function App() {
const day = "Monday"
const myname = "Hanna"
const yourname = "Dave"

  return (
    
      <div className='App'>
       <Header username={myname} color="pink" />
       <Header username={yourname} color="green"  />
       <p>Today is {day}</p>
       <Hompage />
       <Footer />
      </div>
      
    
  )
}

export default App
