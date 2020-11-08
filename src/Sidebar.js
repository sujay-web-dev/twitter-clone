import React from 'react'
import "./Sidebar.css"
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import Sidebaroption from './Sidebaroption';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            
            <TwitterIcon className="sidebar__icon" />
            <Sidebaroption active text="Home" Icon={HomeIcon} />
            <Sidebaroption text="Explore" Icon={SearchIcon} />
            <Sidebaroption text="Notification" Icon={NotificationsNoneIcon} />
            <Sidebaroption text="Messages" Icon={MailOutlineIcon} />
            <Sidebaroption text="Bookmarks" Icon={BookmarkBorderIcon} />
            <Sidebaroption text="Lists" Icon={ListAltIcon} />
            <Sidebaroption text="Profile" Icon={PermIdentityIcon} />
            <Sidebaroption text="More" Icon={MoreHorizIcon} />
            
            <Button className="sidebar__tweet" variant="outlined" fullWidth>Tweet</Button>
            
            
            {/* icon */}
            {/* sidebaroptions */}

            {/* button -> tweet */}
        </div>
    )
}

export default Sidebar
