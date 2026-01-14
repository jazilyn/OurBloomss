import styles from '../styles/Navbar.module.css'   
import { Link } from 'react-router-dom' 
function Navbar(){ 
    return(
        <>
        <nav className = {styles.navbar}>
            <p className = 'display'> Our Blooms </p> 
            <ul className = {styles.ul}> 
              
                <li className = 'caption1'>  <Link to = '/gallery'> GALLERY </Link> </li> 
                <li className = 'caption1'>  <Link to = '/about'> ABOUT </Link> </li> 
                <li className = 'caption1'> <Link to = '/mailto:jazilynv7@gmail.com'>CONTACT </Link> </li>  
            </ul>
        </nav>
        <hr/>
        </>
    )
}

export default Navbar;