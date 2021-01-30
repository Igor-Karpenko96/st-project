import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.content__img}>
                <img
                    src={props.src}
                    alt=""
                />
            </div>
            <div className={classes.description_block}>
                avatar + description
            </div>
        </div>
    )
} 

export default ProfileInfo
