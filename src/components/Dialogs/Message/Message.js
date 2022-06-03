import React from "react";
import { NavLink } from "react-router-dom";
import classes from './../Dialogs.module.css'







const Message = (props) => {
    let newText = React.createRef();

    let addNewPost = ()=>{
        let addNewText  = newText.current.value;
    }
    let addPost=()=>{
        alert('Отправлено!')
    }
   



    <div><h3>Сообщения:</h3></div>
    let path = '/dialogs/mes/' + props.id;
    return (
        <div className={classes.messages}>
            <div><h5>Сообщениe:</h5></div>
        <NavLink to={path}>{props.id}</NavLink>;
        <textarea ref={newText}></textarea>
        <button onClick={addPost}>send</button>
        </div>
    )
}


export default Message;