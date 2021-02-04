import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'



function MyPosts(props) {
    let myPosts = props.postsData.map((p) => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);        
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
                    <button  onClick={addPost}>Add post</button>
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
