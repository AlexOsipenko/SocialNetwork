import React from "react";
import {addMessageActionCreator, changeMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    const onChangeMessage = (message) => {
        props.store.dispatch(changeMessageActionCreator(message))

    }

    return (
        <Dialogs changeMessage={onChangeMessage} addMessage={addMessage} state={state.DialogsPage}/>

    )
}

export default DialogsContainer
