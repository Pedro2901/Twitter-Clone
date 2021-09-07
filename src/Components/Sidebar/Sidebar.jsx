import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarNav from './SidebarNav';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import BookIcon from '@material-ui/icons/Book';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from "@material-ui/core"
import { BrowserRouter ,  Route , Switch } from 'react-router-dom';
function Sidebar(){
return(
<div className="sidebar">
<TwitterIcon className="sidebar_twitterIcon"/>



<SidebarNav active Icon={HomeIcon} text="Home"/>
<SidebarNav Icon={SearchIcon} text="Explore"/>
<SidebarNav Icon={NotificationsIcon} text="Notifications"/>
<SidebarNav Icon={MailIcon} text="Messages"/>
<SidebarNav Icon={BookIcon} text="Bookmarks"/>
<SidebarNav Icon={ListAltIcon} text="Lists"/>
<SidebarNav Icon={PersonIcon} text="Profile"/>
<SidebarNav Icon={MoreHorizIcon} text="More"/>

<BrowserRouter>
            

        <Switch>
        <Route path="Explore">
        <SidebarNav active Icon={SearchIcon} text="Explore"/>
        </Route>
            
        </Switch>   
            </BrowserRouter>
<Button  className="sidebar_tweet" >tweet</Button>

</div>

) 

}

export default Sidebar;