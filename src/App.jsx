import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hompage from './pages/Hompage'
import {userData} from './utils/users.js'
function App() {
  console.log(userData)
const [user, setUsers] = useState([])
  return (
   
      <div className='App'>
       <Header userData={userData} setUsers= {setUsers} />
       <Hompage users={user}/>
      </div>
      
    
  )
}

export default App
