import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
        <div className="header">
        <span className="event">Event</span>
                <span className="minded">Minded</span>
               </div>
                <div className="links">
                  <Link className="link" to="/acceuil">
                    <h4> Acceuil </h4></Link>
                    <Link className="link" to="/event">
                    <h4> Evennement</h4></Link> 
                    <Link className="link" to="/contact">
                    <h4> Contact </h4></Link>
                    <Link className="link" to="/discution">
                    <h4> Discution </h4></Link>
                    
                    <span className="log">
                        <Link className="link" to="/login">
                            Login
                        </Link>
                    </span>
                  </div>
        </div>
    </div>
  )
}

export default Navbar