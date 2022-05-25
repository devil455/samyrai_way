import React from "react";
import Post from '../Post/Post'

let profilePost = [
    { name: 'Alex', age: 31, massege: 'Hi,how are you?', likesCount: 12 },
    { name: 'Vit', age: 36, massege: 'Its ok!', likesCount: 15 },
    { name: 'Tem', age: 24, massege: 'Und You?', likesCount: 19 },
    { name: 'Alex', age: 30, massege: 'Im ok, too!', likesCount: 13 },
]



const Profile = (props) => {
    return (
        <div className='app-wrapper-content'>
            <h3> Content:</h3 >

            <img src="https://info.sibnet.ru/ni/560/560158w_1578630043.jpg"></img>
            <Post name={profilePost[0].name} age={profilePost[0].age} massege={profilePost[0].massege} likesCount={profilePost[0].likesCount} />
            <Post name={profilePost[1].name} age={profilePost[1].age} massege={profilePost[1].massege} likesCount={profilePost[1].likesCount} />
            <Post name={profilePost[2].name} age={profilePost[2].age} massege={profilePost[2].massege} likesCount={profilePost[2].likesCount} />
            <Post name={profilePost[3].name} age={profilePost[3].age} massege={profilePost[3].massege} likesCount={profilePost[3].likesCount} />
            <div>ava + description</div>
            <div>My posts</div>
            <div>New posts</div>
            <div>Posts</div>
        </div >

    )
}

export default Profile;