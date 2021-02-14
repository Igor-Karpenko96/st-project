import * as axios from 'axios'
import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../asets/images/user.png'

const Users = (props) => {
    if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => { 
            props.setUsers(response.data.items)
        })
    //     props.setUsers(  [
    //         {
    //         id: 1,
    //         followed: true,
    //         photoURL: 'https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg',
    //         fullName: 'Ihor',
    //         status: 'Hi guys',
    //         location: { city: 'Slavutych', country: 'Ukraine' },
    //       },
    //       {
    //         id: 2,
    //         followed: false,
    //         photoURL: 'https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg',
    //         fullName: 'Andrew',
    //         status: 'Hi guys',
    //         location: { city: 'Polonne', country: 'Ukraine' },
    //       },
    //       {
    //         id: 3,
    //         followed: true,
    //         photoURL: 'https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg',
    //         fullName: 'Vadim',
    //         status: 'Hi guys',
    //         location: { city: 'Kozelec', country: 'Ukraine' },
    //       },
    //       {
    //         id: 4,
    //         followed: false,
    //         photoURL: 'https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg',
    //         fullName: 'Roman',
    //         status: 'Hi guys',
    //         location: { city: 'Chernigiv', country: 'Ukraine' },
    //       },
    // ])
    }
    return (
        <div>
           {
               props.users.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt=""/>
                       </div>
                       <div>
                           {u.followed 
                           ? 
                           <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            :    
                            <button onClick={() => {props.follow(u.id)}}>Follow</button>
                           }
                       </div>
                   </span>
                   <span>
                       <span>
                           <div>
                                {u.name}
                           </div>
                           <div>
                                {u.status}
                           </div>
                       </span>
                       <span>
                           <div>
                                {"u.location.city"}
                           </div>
                           <div>
                                {"u.location.country"}
                           </div>
                       </span>
                   </span>
               </div>)
                }
        </div>
    )
}

export default Users
