import React from 'react'
import './Tweetbox.css'
import {Button,Avatar} from '@material-ui/core'
import { useState } from 'react'
import db from "./firebase"

function TweetBox() {
  const[tweetMessage,setTweetMessage]=useState("");
  const[tweetImage,setTweetImage]=useState("")

  const sendTweet=e=>{
    e.preventDefault();

    db.collection('posts').add({
      displayName:'Kush',
      userName:"kushhhhh",
      verified:true,
      text:tweetMessage,
      image:tweetImage,
      avatar:""
    })
    setTweetMessage("");
    setTweetImage("");
  }
  return (
    <div className='tweetbox'>
    <h2>Home</h2>
<form>
    <div className='tweetbox_input'>
    <Avatar src=' '/>
    <input 
    onChange={e=>setTweetMessage(e.target.value)}
    placeholder="What's happening" type="text" value={tweetMessage}/>
  
    </div>
    <input 
    value={tweetImage}
    onChange={(e) =>setTweetImage(e.target.value)}
    className='tweetbox_imageinput' placeholder='Enter image URL' type="text"/>
    <Button onClick={sendTweet} className='tweetbutton'>Tweet</Button>
</form>
      
    </div>
  )
}

export default TweetBox