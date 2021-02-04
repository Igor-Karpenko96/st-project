import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addMessageActionCreator, updateNewPostMessageActionCreator} from '../../redux/state'

function Dialogs(props) {
    let dialogsElements = props.dialogsPage.dialogsData.map((d) => <DialogItem dialogsData={props.dialogsData} name={d.name} id={d.id} src={d.src}/>) 
    let messagesElements = props.dialogsPage.messagesData.map((m) => <Message messagesData={props.messagesData} message={m.message} />)
    let sendMessageRef = React.createRef();
    
    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = sendMessageRef.current.value
        props.dispatch(updateNewPostMessageActionCreator(text))
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {
                    dialogsElements
                }
            </div>
            <div className={classes.messages}>
                {
                    messagesElements
                }
                <div>
                    <div>
                        <textarea ref={sendMessageRef} value={props.dialogsPage.newMessageText} onChange={onMessageChange}></textarea> 
                    </div>
                    <div>
                        <button onClick={sendMessage}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
