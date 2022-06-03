import React from "react";
import classes from './Post.module.css'

const Post = (props) => {

    let newTextElement =React.createRef(); 

    let addPost = ()=>{
        let textElement= newTextElement.current.value;
    };

    let addLike = ()=>{
        alert('Thanks!');
    };

    return (


        <div className={classes.post}>
            <img src="https://avatars.mds.yandex.net/i?id=800d3856ba40a06b76632ef9bea9f574-5910485-images-thumbs&n=13"></img>
            <div>{props.name},{props.age}</div>
            <div>{props.massege}</div>
            <div>
                <textarea ref={newTextElement}></textarea>
                <button className={classes.button} onClick={addPost}>send</button>
            </div>
            <div>
                <button onClick={addLike}>like</button>{props.likesCount}
            </div>




        </div>
    )

}
export default Post;