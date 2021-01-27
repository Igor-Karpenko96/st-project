import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'


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
            <MyPosts/>
      </div>
    )
}

export default Profile
