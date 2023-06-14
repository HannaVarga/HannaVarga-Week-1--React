 import React, {useState} from 'react'
import './Header.css'



function Header({userData, setUsers}) {

    //create state for country
    const [country, setCountry] = useState('')

    const handleInput = (e) =>{
        console.log(e.target.value)
        //store this in country
        setCountry(e.target.value)

    }

    const handleSearch = () =>{
        console.log(country)
        //filter userData for matches to country
        setUsers(userData.filter(item => item.country.toLowerCase() === country.toLowerCase()))
        //reset the text box
        setCountry('')
    }

    const handleShow = () =>{
        console.log("show all")
        //set users to userData
        setUsers(userData)
    }
  return (
    <div className="header-container">
        <button onClick={handleShow}>Show all</button>
        <div className="search-container">
            <input type="text" onChange={handleInput}
            placeholder="Enter country" 
            value = {country}/>
            <button onClick = {handleSearch}>Search</button>
        </div>
    </div>
  )
}

export default Header
