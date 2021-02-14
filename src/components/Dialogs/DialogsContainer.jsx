import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewPostMessageActionCreator} from '../../redux/dialogsReducer'
import {connect} from 'react-redux'


// function DialogsContainer(props) {
    
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState().dialogsPage;
    
//             let onSendMessage = () => {
//                 store.dispatch(addMessageActionCreator());
//         }

//             let onMessageChange = (text) => {
//                 store.dispatch(updateNewPostMessageActionCreator(text))
//     }
//             return <Dialogs 
//                 updateNewMessage={onMessageChange} 
//                 sendNewMessage={onSendMessage} 
//                 dialogsPage={state}/>
//         }
//         }
//     </StoreContext.Consumer> 
// }

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch(updateNewPostMessageActionCreator(text))
        },
        sendNewMessage: () => {
            dispatch(addMessageActionCreator());
        } 
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
 
export default DialogsContainer;
