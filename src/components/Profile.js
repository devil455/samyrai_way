import React from "react";
import classes from './Profile.module.css'

const Profile = () =>{
    return(
    <div className={classes.content}>
   <div>Content:</div> 
   <img src="https://avatars.mds.yandex.net/i?id=d3e444f199fe261de3247784435402b5-5877259-images-thumbs&n=13"></img>
   <div>ava + description</div>
   <div>My posts</div>
   <div>New posts</div>
   <div>Posts</div>
    </div>
    )
}

export default Profile;