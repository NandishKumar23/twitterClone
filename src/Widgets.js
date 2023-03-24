import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import {TwitterTweetEmbed,TwitterTimelineEmbed,TwitterShareButton} from "react-twitter-embed"
import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
    <div className='widgets_input'>
     <SearchIcon className='widgets_searchIcon'/>
     <input type="text" placeholder="Search Twitter" />
    </div>
    <div className='widgets_widgetContainer'>
   <h2>What's Happening</h2>
   <TwitterTweetEmbed tweetId={"858551177860055040"}/>
   <TwitterTimelineEmbed
    sourceType='profile'
    screeName='cleverQazi'
 options={{height:400}}
   />
   <TwitterShareButton 
    url={"https://facebook.com/cleverprogrammer"}
    options={{text:"react is awesome",via:"cleverqazi"}}
   />
    </div>
    </div>
  )
}

export default Widgets