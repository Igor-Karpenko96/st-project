import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'



function Profile(props) {
    return (
        <div>
            <ProfileInfo profile={props.profile} src="https://images.unsplash.com/photo-1612637829340-c91db24ca338?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/>
            <MyPostsContainer/>
      </div>
    )
}

export default Profile
