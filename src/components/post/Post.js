import React from 'react'
import '../post/post.css'
import { Users } from '../../Dummydata'

const Post = ({post}) => {
    const user= Users.filter(u=>u.id===1);
    console.log(user);    
  return (
    <>

        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postLeft">
                            <img className='postProfileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                            <span className="postUserName">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                            <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postRight">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className='postImg' src={post.photo} alt="" />    
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="https://cdn-icons-png.flaticon.com/128/2107/2107845.png" alt="" />
                        <img  className='likeIcon'src="https://cdn-icons-png.flaticon.com/128/3670/3670153.png" alt="" />
                        <span className="postLikeCounter">{post.like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Post
