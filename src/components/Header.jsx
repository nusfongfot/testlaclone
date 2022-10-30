import  { useState } from 'react'
import './App.css'
import Logo from './img/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const [showNav, setShowNav] = useState(false)

  return (
    <div>
    <header className='header'>      
      <a href="#">
        <img src={Logo} alt="" />
      </a>    
      
      <div className="menu">
        <p><a href="#">Model S</a></p>
        <p><a href="#">Model 3</a></p>
        <p><a href="#">Model X</a></p>
        <p><a href="#">Model Y</a></p>
      </div>

      <div className="right__menu" onClick={() => setShowNav(true)}>
          <a href="#">Shop</a>
          <a href="#">Tesla  Account</a>
          <a href="#" className="menu-icon"><MenuIcon /></a>
      </div>
      <div className="burgernav" style={{transform: showNav ? 'translateX(0)' : 'translateX(100%)'}}>
        <div className="close" onClick={() => setShowNav(false)}><CloseIcon /></div>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-ing</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
      </div>  
    </header>
 
    </div>
  )
}
