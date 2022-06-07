import React from "react";
import classes from './Dialogs.module.css'

import Persons from "./Persons/Persons";
import Message from "./Message/Message";





const Dialogs = (props) => {

    let dialogsElement = props.dialogsData.map(dialog => (<Persons name={dialog.name} id={dialog.id} />))
    let messagesElement = props.Messages.map(message => (<Message message={message.mes} id={message.id} addNewPost={props.addNewPost} />))

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogPerson}>
                {dialogsElement}


            </div>

            <div className={classes.messeges}>
                {messagesElement}



            </div>
        </div>







    )



}
export default Dialogs;
