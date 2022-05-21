import React from "react";
import classes from './Post.module.css'

const Post = (props)=>{
    return (
        
            <div className={classes.post}>
           <div>Post</div> 
           <img src="https://avatars.mds.yandex.net/i?id=800d3856ba40a06b76632ef9bea9f574-5910485-images-thumbs&n=13"></img>
           <div>{props.name},{props.age}</div>
           <div>{props.massege}</div>
           <div>
               <textarea></textarea>
               <button>send</button>
           </div>
           <div>
               <button>like</button>{props.likesCount}
           </div>
           
                
           
           
            </div>
            )
    
}
export default Post;