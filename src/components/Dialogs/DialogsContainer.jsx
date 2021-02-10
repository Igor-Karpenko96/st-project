import React from 'react';
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewPostMessageActionCreator} from '../../redux/dialogsReducer'
import StoreContext from '../../StoreContext';

function DialogsContainer(props) {
    
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;
    
            let onSendMessage = () => {
                store.dispatch(addMessageActionCreator());
        }

            let onMessageChange = (text) => {
                store.dispatch(updateNewPostMessageActionCreator(text))
    }
            return <Dialogs 
                updateNewMessage={onMessageChange} 
                sendNewMessage={onSendMessage} 
                dialogsPage={state}/>
        }
        }
    </StoreContext.Consumer>
        
        
    
}

export default DialogsContainer;
