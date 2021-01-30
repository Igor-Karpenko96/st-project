import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

function Dialogs(props) {
    let dialogsElements = props.dialogsData.map((d) => <DialogItem dialogsData={props.dialogsData} name={d.name} id={d.id}/>) 
    let messagesElements = props.messagesData.map((m) => <Message messagesData={props.messagesData} message={m.message} />)

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
            </div>
        </div>
    )
}

export default Dialogs;