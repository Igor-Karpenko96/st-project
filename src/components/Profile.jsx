import React from 'react';
import classes from './Profile.module.css';


function Profile() {
    return (
        <div className={classes.content}>
            <div className={classes.content__img}>
                <img
                    src="https://tech.informator.ua/wp-content/uploads/2018/10/luchie_knigi_kiberpank.jpg"
                    alt=""
                />
            </div>
            <div>avatar + description</div>
            <div>
                my posts
                <div>new post</div>
                <div className={classes.posts}>
                    <div className={classes.item}>post 1</div>
                    <div className={classes.item}>post 2</div>
                </div>
            </div>
      </div>
    )
}

export default Profile
