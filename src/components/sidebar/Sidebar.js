import React from 'react'
import './sidebar.css'
import {Users} from '../../Dummydata'
import CloseFriend from '../closeFriends/CloseFriend'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <i className='fa fa-home' id='sidebarIcon'></i>
            <div className="sidebarListItemText">FEED</div>
          </li>
          <li className="sidebarListItem">
            <i className='fa fa-home' id='sidebarIcon'></i>
            <div className="sidebarListItemText">CHAT</div>
          </li>
          <li className="sidebarListItem">
            <i className='fa fa-home' id='sidebarIcon'></i>
            <div className="sidebarListItemText">VIDEO</div>
          </li>
          <li className="sidebarListItem">
            <i className='fa fa-home' id='sidebarIcon'></i>
            <div className="sidebarListItemText">GROUPS</div>
          </li>
          <li className="sidebarListItem">
            <i className='fa fa-home' id='sidebarIcon'></i>
            <div className="sidebarListItemText">BOOKMARKS</div>
          </li>
          <li className="sidebarListItem">
            <i className='fa fa-home' id='sidebarIcon'></i>
            <div className="sidebarListItemText">QUESTIONS</div>
          </li>
          <li className="sidebarListItem">
            <i className='fa fa-home' id='sidebarIcon'></i>
            <div className="sidebarListItemText">JOBS</div>
          </li>
          <li className="sidebarListItem">
            <i className='fa fa-home' id='sidebarIcon'></i>
            <div className="sidebarListItemText">EVENTS</div>
          </li>
          <li className="sidebarListItem">
            <i className='fa fa-home' id='sidebarIcon'></i>
            <div className="sidebarListItemText">COURSES</div>
          </li>

        </ul>

        <button className='sidebarButton'>Shoe more</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
       {Users.map(u =>(
        <CloseFriend key={u.id} user={u}/>
       ))}
        
        </ul> 
      </div>      
    </div>
  )
}

export default Sidebar
