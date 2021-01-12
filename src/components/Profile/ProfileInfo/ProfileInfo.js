import React from "react";
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.oblozhka} src='https://oren-m7.ru/images/400/DSC100498782.jpg'/>
            </div>
            <div>
                аватар+описание
            </div>
        </div>
    )
}

export default ProfileInfo
