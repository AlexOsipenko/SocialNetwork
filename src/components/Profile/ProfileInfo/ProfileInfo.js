import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {
    if (props.profile == null){
        return(
        <Preloader/>)
    }
    return (
        <div>
            <div>
                <img className={style.oblozhka} src='https://oren-m7.ru/images/400/DSC100498782.jpg'/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <div>{props.profile.aboutMe}</div>
        </div>
    )
}

export default ProfileInfo
