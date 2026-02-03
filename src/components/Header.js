import SearchIcon from '@mui/icons-material/Search';
import '../styles/Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Chat from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        signOut(auth)
    }

  return (
    <div className='header'>
        <div className="header_left">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" 
                alt="" 
            />
            <div className="header_search">
                <SearchIcon />
                <input placeholder='search' type="text" />
            </div>
        </div>

        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title={"Home"}/>
            <HeaderOption Icon={SupervisorAccountIcon} title={"My Network"}/>
            <HeaderOption Icon={BusinessCenter} title={"Jobs"}/>
            <HeaderOption Icon={Chat} title={"Messaging"}/>
            <HeaderOption Icon={Notifications} title={"Notifications"}/>
            <HeaderOption
                avatar={true}
                title="me"
                onClick={logoutOfApp}
            />
        </div>
    </div>
  )
}

export default Header