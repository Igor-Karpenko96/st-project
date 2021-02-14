import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

function Dialogs(props) {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map((d) => <DialogItem key={d.id} dialogsData={state.dialogsData} name={d.name} id={d.id} src={d.src}/>) 
    let messagesElements = state.messagesData.map((m) => <Message key={m.id} messagesData={state.messagesData} message={m.message} />)
    let newMessageText = state.newMessageText;
    let sendMessageRef = React.createRef();
    
    let onSendMessage = () => {
        props.sendNewMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessage(text)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {
                    dialogsElements
                }
            </div>
            <div className={classes.messages}>
                <div>
                    {
                        messagesElements
                    }
                    <div>
                        <textarea ref={sendMessageRef} value={newMessageText} onChange={onMessageChange} placeholder="Enter your message"></textarea> 
                    </div>
                    <div>
                        <button onClick={onSendMessage}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
