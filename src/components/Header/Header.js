import {
    Home,LiveTv,PersonOutline,Search,VideoLibrary,FlashOn
} from '@material-ui/icons';
import './Header.css';
import Logo from './../../Images/logo.png';

const Header = () => {
    return(
      <div className = "header">
        <div className ="header_icons">
            <div className = "header_icon header_icon--active">
                <Home/>
                <p>Home</p>
                </div>
                <div className = "header_icon">
                <LiveTv/>
                <p>Verified</p>
            </div>
            <div className = "header_icon">
                <FlashOn/>
                <p>Trending</p>
            </div>
            <div className = "header_icon">
                <VideoLibrary/>
                <p>Collections</p>
            </div>
            <div className = "header_icon">
                <Search/>
                <p>Search</p>
            </div>
            <div className = "header_icon">
                <PersonOutline/>
                <p>Login</p>
            </div>
            </div>
            <div className = "header_image">
            <img className ="image" src={Logo}></img>
            </div>
        </div> 
    )
}
export default Header;