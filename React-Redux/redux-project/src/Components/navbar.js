import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const count = useSelector(state => state.count)
  return (
    
    <div>
      <nav className='navbar'>
        <ul className='nav-ul'>
            <li>Home</li>
            <li>Add cart: {count} </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
