import React from 'react'
import './Hompage.css'
import PersonCard from '../components/PersonCard/PersonCard'
function Hompage({users}) {
  return (
    <div className='hompage-container'>
     <h1>User directory</h1>
     <div className='person-container'>
      {/* {
      users.map(item=><p>{item.username}</p>)
      } */}
      {
        users.map((item, index) =><PersonCard key={index} person={item}/>)
      }
     </div>
    </div>
  )
}

export default Hompage



