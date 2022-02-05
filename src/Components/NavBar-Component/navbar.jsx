import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from '../Button/button';
import './navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button , setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);
    return (
       <>
       <nav className="nav-bar">
           <div className="nav-bar-container">
               <Link to = '/' className='nav-bar-logo' onClick={closeMobileMenu}>IrinAjo <i className="fas fa-plane-departure"/> </Link>
               <div className="nav-menu-icon" onClick={handleClick}>
                  
                   <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
<li className='nav-items'>
    <Link to ='/' className='nav-links' onClick={closeMobileMenu}> Home </Link>
</li>
<li className='nav-items'>
    <Link to ='/services' className='nav-links' onClick={closeMobileMenu}> Services </Link>
</li>
<li className='nav-items'>
    <Link to ='/travel-plans' className='nav-links' onClick={closeMobileMenu}> Trave Plans </Link>
</li><li className='nav-items'>
    <Link to ='/sign-uP' className='nav-links-mobile' onClick={closeMobileMenu}> Sign Up </Link>
</li>


               </ul>
               {button && <Button buttonStyle='btn--outline' buttonSize='btn--medium'>SIGN UP </Button>}
               

           </div>
       </nav>
       </>
    )
}

export default Navbar
