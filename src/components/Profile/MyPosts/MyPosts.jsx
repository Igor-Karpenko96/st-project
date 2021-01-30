import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post'

function MyPosts(props) {
    
    let myPosts = props.postsData.map((p) => <Post message={p.message} likes={p.likes}/>)

    return (
        <div className={classes.posts_block}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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
