import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from "react-router-dom";


const Persons = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.persons}>
            <NavLink to={path}>{props.name}</NavLink>;
        </div>
    )
}

const Message = (props) => {
    return (
        <div>{props.messege}</div>
    )
}

let dialogsData = [
    { id: 1, name: 'Alex1' },
    { id: 2, name: 'Alex2' },
    { id: 3, name: 'Alex3' },
    { id: 4, name: 'Alex4' },
    { id: 5, name: 'Alex5' },
]

let Messages = [
    { id: 1, mes: 'Hello1' },
    { id: 2, mes: 'Hello2' },
    { id: 3, mes: 'Hello3' },
    { id: 4, mes: 'Hello4' },
    { id: 5, mes: 'Hello5' },
]


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogPerson}>
                <Persons name={dialogsData[0].name} id={dialogsData[0].id} />
                <Persons name={dialogsData[1].name} id={dialogsData[1].id} />
                <Persons name={dialogsData[2].name} id={dialogsData[2].id} />
                <Persons name={dialogsData[3].name} id={dialogsData[3].id} />
                <Persons name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>

            <div className={classes.messeges}>
                <Message messege={Messages[0].mes} id={Messages[0].mes} />
                <Message messege={Messages[1].mes} id={Messages[0].mes} />
                <Message messege={Messages[2].mes} id={Messages[0].mes} />
                <Message messege={Messages[3].mes} id={Messages[0].mes} />
                <Message messege={Messages[4].mes} id={Messages[0].mes} />

            </div>
        </div>







    )



}
export default Dialogs;
