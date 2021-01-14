import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";





const Dialogs = (props) => {
    let newDialogsData = props.state.DialogsData.map(user => <DialogItem id={user.id} name={user.name}/>)
    let newMessagesData = props.state.MessagesData.map(message => <MessageItem message={message.message}/>)
    let newMessageText = React.createRef()
    let newMessage = () => {
        let text = newMessageText.current.value
        alert(text)
    }

    return (

        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {newDialogsData}
            </div>
            <div className={style.messages}>
                {newMessagesData}
                <textarea ref={newMessageText}/><button onClick={newMessage}>new message</button>
            </div>
        </div>

    )
}

export default Dialogs
