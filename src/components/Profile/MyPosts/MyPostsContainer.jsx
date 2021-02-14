import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux'


// function MyPostsContainer(props) {
//     // let state = props.store.getState()
    
    
//     return (
//         <StoreContext.Consumer> 
//             { (store) => {
//             let state = store.getState()
//             let addPost = () => {
//                 store.dispatch(addPostActionCreator());
//             }
        
//             let onPostChange = (text) => {
//                 let action = updateNewPostTextActionCreator(text);
//                 store.dispatch(action);        
//             }
        
//            return <MyPosts 
//                 updateNewPostText={onPostChange} 
//                 addPost={addPost} 
//                 posts={store.getState().profilePage.postsData} 
//                 newPostText={store.getState().profilePage.newPostText}/>
// }}
//         </StoreContext.Consumer> 
//     )
// }


let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        } 
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
