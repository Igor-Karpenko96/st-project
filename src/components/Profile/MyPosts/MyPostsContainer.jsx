import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


function MyPostsContainer(props) {
    // let state = props.store.getState()
    
    
    return (
        <StoreContext.Consumer> 
            { (store) => {
            let state = store.getState()
            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }
        
            let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text);
                store.dispatch(action);        
            }
        
           return <MyPosts 
                updateNewPostText={onPostChange} 
                addPost={addPost} 
                posts={store.getState().profilePage.postsData} 
                newPostText={store.getState().profilePage.newPostText}/>
}}
        </StoreContext.Consumer> 
    )
}

export default MyPostsContainer;