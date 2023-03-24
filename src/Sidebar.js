import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter'
import SidebarOption from './SidebarOption'
import  HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import  NotificationsNoneIcon  from '@material-ui/icons/Notifications'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import ListAltIcons from '@material-ui/icons/ListAlt'
import BookmarkBorderIcon from '@material-ui/icons/Bookmarks'
import MailOutlineIcon from '@material-ui/icons/Message'
import { Button } from '@material-ui/core'







function Sidebar() {
  return (
    <div className='sidebar'>
     <TwitterIcon className='sidebar_twitterIcon'/>
     <SidebarOption active Icon={HomeIcon} text="Home"/>
     <SidebarOption Icon={SearchIcon } text="Explore"/>
     <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
     <SidebarOption Icon={MailOutlineIcon} text='Messages'/>
     <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks'/>
     <SidebarOption Icon={ListAltIcons} text='Lists'/>
     <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
     <SidebarOption Icon={MoreHorizIcon} text="More"/>
     <Button variant='outlined' className='sidebar_tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar