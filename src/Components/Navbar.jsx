import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   <>
   
   <nav className='bg-blue-400 px-5'>
   <div className="main">
            <div className="img">
                <img src="public/TT.png" alt="img" />
                <p>Tours & Travels Ltd.</p>
            </div>
          <div className="buttons">
            <button>All Country</button>
            <button>Bangladesh</button>
            <button>Pakistan</button>
            <button>Dubai</button>
            <button>Malaysia</button>
          </div>
        </div>
   </nav>
   
   
   </>
  )
}

export default Navbar