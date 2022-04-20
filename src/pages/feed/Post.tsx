import React, {FC} from 'react';
import placeholderProfilePicture from '../../profile-image-placeholder.png'

interface IPost{
    user?:{};
    text:string
}

const Post:FC<IPost> = (props) => {
    return (
        <div className={'Post'}>
            <div className={'TopBar'}>
                <img src={placeholderProfilePicture} className={'ProfilePicture'}/>
                <span>username</span>
            </div>
            <div className={'Content'}>
                <p>{props.text}</p>
            </div>
            <div className={'Buttons'}>
                <a>👍</a>
                <a>👎</a>
                <a>comments</a>
                <a>share</a>
                <a>report</a>
            </div>
        </div>
    );
};

export default Post;