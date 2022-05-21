import React from "react";
import classes from './Profile.module.css'
import Post from '../Post/Post'

const Profile = () =>{
    return(
    <div className={classes.profile}>
   <div>Content:</div> 
   <img src="https://info.sibnet.ru/ni/560/560158w_1578630043.jpg"></img>
   <div>ava + description</div>
   <Post name = 'Alex' age = '30' massege ='Hi,how are you?' likesCount='12'/>
   <Post name = 'Vit' age = '36' massege = 'Its ok!'/>
   <Post name = 'Tem' age = '24' massege = 'Und You?'/>
   <Post name = 'Alex' age = '30' massege = 'Im ok, too!'/>
   <div>My posts</div>
   <div>New posts</div>
   <div>Posts</div>
    </div>
    
    )
}

export default Profile;