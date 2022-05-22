import React from "react";
import Post from '../Post/Post'

const Profile = () =>{
    return(
    <div className='app-wrapper-content'>
   <div>Content:</div> 
   <img src="https://info.sibnet.ru/ni/560/560158w_1578630043.jpg"></img>
   <Post name = 'Alex' age = '30' massege ='Hi,how are you?' likesCount='12'/>
   <Post name = 'Vit' age = '36' massege = 'Its ok!' likesCount='15'/>
   <Post name = 'Tem' age = '24' massege = 'Und You?' likesCount='19'/>
   <Post name = 'Alex' age = '30' massege = 'Im ok, too!' likesCount='22'/>
   <div>ava + description</div>
   <div>My posts</div>
   <div>New posts</div>
   <div>Posts</div>
    </div>
    
    )
}

export default Profile;