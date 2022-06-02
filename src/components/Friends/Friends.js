import React from "react";
import classes from './Friends.module.css'

const Friends = (props) => {
    let friendsItems = props.friends.map(f => (<Friends name={f.name} age={f.age} massege={f.massege} likesCount={f.likesCount} />));

    return (
        <div className={classes.friends}>
            <h3>Друзья</h3>
            {props.name}
            </div>
        
       
    )

}

export default Friends;