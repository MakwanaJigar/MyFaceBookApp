  import React from 'react'
import './rightbar.css'
import { Users } from '../../Dummydata'
import Online from '../online/Online'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      
    <div className="rightbarWrapper">
      <div className="birthdatContainer">
        <img className='birthdayImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCQrNEz7EyHHWdXEoBLycQtACLuBSKdgzBNbHauxt&s" alt="" />
        <span className='birthdayText'><b>Krish</b> and <b>3 other</b> friends have a brithday today</span>
      </div>
      <img className='rightbarAd' src="https://images.unsplash.com/file-1635990755334-4bfd90f37242image?dpr=2&auto=format&fit=crop&w=416&q=60" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendsList">
       {
        Users.map(u =>(
          <Online key={u.id} user={u} />
        ))
       }
      </ul>
    </div>

    </div>
  )
}

export default Rightbar
