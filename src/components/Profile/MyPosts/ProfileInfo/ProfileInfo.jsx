import React from 'react'
import Preloader from '../../../common/Preloader'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return (
            <Preloader/>
        )
    }
    return (
        <div>
            <div className={classes.content__img}>
                <img
                    src={props.src}
                    alt=""
                />
            </div>
            <div className={classes.description_block}>
                <img src={props.profile.photos.large}/>
                <div>
                    {
                        props.profile.aboutMe
                    }
                </div>
                <div>
                    {
                        props.profile.lookingForAJob===true ? 'i looking for a job': 'i am working'
                    }
                </div>
                    {
                        props.profile.fullName
                    }
                    <div>
                        <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a>
                    </div>
            </div>
        </div>
    )
} 

export default ProfileInfo
