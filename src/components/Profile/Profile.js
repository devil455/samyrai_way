import React from "react";
import Post from '../Post/Post'





const Profile = (props) => {
   
       
    let postItems = props.profilePost.map(p=>(<Post name={p.name} age={p.age} massege={p.massege} likesCount={p.likesCount} addNewPost={props.addNewPost}/>))

    return (
        <div className='app-wrapper-content'>
            <h3> Content:</h3 >
            <img src="https://info.sibnet.ru/ni/560/560158w_1578630043.jpg" alt=''></img>
            <div><h3>Посты:</h3></div>
            {postItems}
            
            <div>ava + description</div>
            <div>My posts</div>
            <div>New posts</div>
            <div>Posts</div>
        </div >

    )
}

export default Profile;




