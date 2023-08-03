import { render } from "@testing-library/react"
import videoAcc from '../connectify/Page-Accueil/fd_accueil.mp4'
import img1 from '../connectify/Page-Accueil/fd_actualite.jpg'
import '../header.css'
import header from '../header.css'

function Header(){
    
return(
<header>
<video src={videoAcc} id="VideoAcc" autoPlay muted loop>
    
</video>
<img src={img1} type="img/jpg"/>
</header> 
)};

export default Header;