import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hompage from './pages/Hompage'
import {userData} from './utils/users.js'


function App() {

  

const [user, setUsers] = useState([])

console.log(userData)

  return (
   
      <div className='App'>
       <Header userData={userData} setUsers= {setUsers} />
       <Hompage users={user}/>
      </div>
      
    
  )
}

export default App
