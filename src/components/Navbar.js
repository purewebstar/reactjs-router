import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
  render() {
    return(
     <nav className='navbar'>
       <div>
         <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/contact'>Contact</Link></li>
         </ul>
       </div>
     </nav>
    )
  }
}

export default Navbar
