import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import noavatar from '../../../static/img/no-avatar.png'

const ProfileInfo = (props) => {
    if (props.profile == null){
        return(
        <Preloader/>)
    }
    let avatar
    if (props.profile.photos.large != null){
        avatar = props.profile.photos.large
    }
    else {
        avatar = noavatar
    }
    return (
        <div>
            <div>
                <img className={style.oblozhka} src='https://oren-m7.ru/images/400/DSC100498782.jpg'/>
            </div>
            <div>
                <img src={
                     avatar
                }/>
            </div>
            <div>{props.profile.aboutMe}</div>
        </div>
    )
}

export default ProfileInfo
