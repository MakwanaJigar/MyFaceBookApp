import React from 'react'
import './topbar.css'

const Topbar = () => {
  return (
    <>
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className='logo'>JigarMakwana</span>
      </div>
      <div className="topbarCenter">
            <div className="searchbar">
                <i className='fa fa-search' id='searchicon'></i>
                <input className="searchInput" placeholder='Search'/>
            </div>  
      </div>
      <div className="topbarRight">

        <div className="topbarLinks">
            <span className="topbarLink">Home Page</span>
            <span className="topbarLink">Time Line</span>
        </div>
         <div className="topbarIcons">
            <div className="topbarIconItem">
                <i className='fa fa-user'></i>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <i className='fa fa-message'></i>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <i className='fa fa-bell'></i>
                <span className="topbarIconBadge">1</span>
            </div>
         </div>

            <img src="/assets/snap.png" alt="" className="topbarImg" />

      </div>


    </div>
    </>
  )
}

export default Topbar
