import React from 'react'
import '../share/share.css'

const Share = () => {
  return (
    <>
     <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

                <input className='shareInput' placeholder="What's in your mind??"/>
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <i className='fa fa-file text-primary' id='shareIcon'></i>
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <i className='fa fa-tag text-danger' id='shareIcon'></i>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <i className='fa fa-location-dot text-success' id='shareIcon'></i>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <i className='fa fa-icons text-info' id='shareIcon'></i>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                    
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
     </div>

    </>
  )
}

export default Share
