import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'



function MyPosts(props) {
    let myPosts = props.posts.map((p) => <Post message={p.message} likes={p.likes}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)        
    }

    return (
        <div className={classes.posts_block}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange} 
                        ref={newPostElement} 
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button  onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {
                    myPosts
                }
            </div>
        </div>
    )
}

export default MyPosts
