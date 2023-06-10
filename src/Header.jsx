import React from 'react'

function Header({username, color}) {
  return (
    <div className='header-container'>
    <h1>Wellcome {username} your favourite color is : {color}</h1>
    </div>
  )
}

export default Header
