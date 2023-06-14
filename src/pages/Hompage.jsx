import React from 'react'
import './Hompage.css'
import PersonCard from '../components/PersonCard/PersonCard'

// import PersonCard from '../../components/PersonCard/PersonCard';

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

// export default Hompage

 // import React from 'react'
// import './HomePage.css'
// import PersonCard from '../../components/PersonCard/PersonCard';

// function HomePage({users}) {
//   return (
//     <div className="homepage-container">
//         <h1>User Directory</h1>
//         <div className="person-container">
//             {
             // users.map((item, index)=><p key={index}>{item.username}</p>)

//                 users.map((item, index)=><PersonCard key={index} person={item}/>)
//             }
//         </div>
//     </div>
//   )
// }

// export default HomePage



