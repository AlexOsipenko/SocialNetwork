import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../static/img/no-avatar.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages =[]
    for (let i=1; i<=pagesCount; i++){
        pages.push(i)
    }
    return (
        <div>
            {pages.map(page => {
                return(
                    <span className={props.currentPage === page && style.currentPage} onClick={()=>{
                        props.changePage(page)
                    }}>{page}</span>

                )})}
            {props.users.map((user) =><div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+user.id}>
                        <img className={style.photo}
                             src={user.photos.small != null ? user.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ? <button onClick={()=>{props.unfollow(user.id)}}>Unfollow</button> :
                            <button onClick={()=>{props.follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )

}

export default Users
