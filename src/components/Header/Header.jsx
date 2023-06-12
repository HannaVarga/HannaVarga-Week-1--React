import React from 'react'
import './Header.css'
import { usersData } from './../../utils/users';

function Header({userData , setUsers}) {
  // create state for textbox input
  const[country, setCountry] = React.useState('')

  const handleInput = (e) =>{
    console.log(e.target.value)
    // store in state 
    // setCountry(e.target.value)
  
  } 
  const handleSearch = () =>{
    console.log(country)
    // filter userData based on country
    // set users to this result
  setUsers(usersData.filter(item=> item.country.toLowerCase() === country.toLowerCase()))
  // clear textbox
  setCountry('')
  }
  const handleShow =() => {
   console.log('show all')
  //  set users to userData
   setUsers(usersData)
  }
  return (
    <div className='header-container'>
   <button onClick={handleShow}>Show all</button>
   <div className='search-container'>
    <input type='text' onChange={handleInput} value={country} placeholder='Enter country' />
    <button onClick={handleSearch}>Search</button>
   </div>
    </div>
  )
}

export default Header
