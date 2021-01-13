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

let DialogsData = [{id: 1, name: 'Alex'}, {id: 2, name: 'Igor'}, {id: 3, name: 'Sasha'}]
let MessagesData = [{id: 1, message: 'hi'}, {id: 2, message: 'ha'}, {id: 3, message: 'ho'}]

const Dialogs = (props) => {
    return (

        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem id={DialogsData[0].id} name={DialogsData[0].name}/>
                <DialogItem id='id2' name='Igor'/>
                <DialogItem id='id3' name='Sasha'/>
            </div>
            <div className={style.messages}>
                <MessageItem message={MessagesData[0].message}/>
                <MessageItem message={MessagesData[1].message}/>
                <MessageItem message={MessagesData[2].message}/>
            </div>
        </div>

    )
}

export default Dialogs
