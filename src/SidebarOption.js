import React from 'react'
import './SidebarOptions.css'
function SidebarOption({active,text,Icon}) {
  return (
    <div className={`SidebarOptions  ${active && 'SidebarOptions--active'}`}>
     <Icon/>
     <h2>{text}</h2>

    </div>
  )
}

export default SidebarOption