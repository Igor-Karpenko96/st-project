import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'



function Profile(props) {
    return (
        <div>
            <ProfileInfo src="https://tech.informator.ua/wp-content/uploads/2018/10/luchie_knigi_kiberpank.jpg"/>
            <MyPostsContainer/>
      </div>
    )
}

export default Profile
