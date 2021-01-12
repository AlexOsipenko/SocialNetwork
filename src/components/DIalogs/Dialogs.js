import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) =>{
    return(
        <div className={style.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return(
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (

        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem id='id1' name='Alex'/>
                <DialogItem id='id2' name='Igor'/>
                <DialogItem id='id3' name='Sasha'/>
            </div>
            <div className={style.messages}>
                <MessageItem message='hi'/>
                <MessageItem message='ho'/>
                <MessageItem message='he'/>
            </div>
        </div>

    )
}

export default Dialogs
