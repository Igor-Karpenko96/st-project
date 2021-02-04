import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'



function Profile(props) {
    
    return (
        <div>
            <ProfileInfo src="https://tech.informator.ua/wp-content/uploads/2018/10/luchie_knigi_kiberpank.jpg"/>
            <MyPosts 
                newPostText={props.profilePage.newPostText} 
                dispatch={props.dispatch} 
                postsData={props.profilePage.postsData}
            />
      </div>
    )
}

export default Profile
