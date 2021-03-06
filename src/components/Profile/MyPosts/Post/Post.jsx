import React from 'react'
import classes from './Post.module.css';


function Post(props) {
    return (
        <div className={classes.item}>
            <img src="https://i.pinimg.com/564x/6c/f2/e3/6cf2e354f18bdedf8eda346640c7e4ff.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.likes} Like</span>   
            </div>
            
        </div>
    )
}

export default Post
