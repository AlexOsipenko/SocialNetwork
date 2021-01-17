import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, changeMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let newDialogsData = props.state.DialogsData.map(user => <DialogItem id={user.id} name={user.name}/>)
    let newMessagesData = props.state.MessagesData.map(message => <MessageItem message={message.message}/>)
    let newMessageText = React.createRef()
    const AddMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    const onChangeMessage = (mes) => {
        let message = mes.target.value
        props.dispatch(changeMessageActionCreator(message))

    }

    return (

        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {newDialogsData}
            </div>
            <div className={style.messages}>
                {newMessagesData}
                <textarea ref={newMessageText}
                          onChange={onChangeMessage}
                          value={props.state.NewMessage}/>
                <button onClick={AddMessage}>new message</button>
            </div>
        </div>

    )
}

export default Dialogs
