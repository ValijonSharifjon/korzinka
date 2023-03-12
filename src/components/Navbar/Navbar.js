import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
const Navbar = ({size}) => {
  return (
    <nav>
        <div className='nav_box'>
            <Link className="card-link" to="/">
              <span className='my_shop'>
              <i class="fa-solid fa-cart-shopping"></i> korzinka 
              </span>
            </Link>
            
            <div className='cart'>
               <Link className="card-link" to="/storage">
               <span className='storage'>
                  <i class="fa-solid fa-warehouse"></i>
                </span>
               </Link>
               <Link to="/cart" className="card-link">
               <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>
                    {size}
                </span>
               </Link>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar