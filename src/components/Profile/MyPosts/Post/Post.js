import React from "react";
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <div><img
                src='https://avatars.mds.yandex.net/get-zen_doc/105853/pub_5cfe815283e84200af3e43e5_5cfe839285b5e500afe2eeb1/scale_1200'/>
            </div>
            <div className={style.message}>{props.message}</div>
        </div>
    )
}

export default Post
