import React, {FC} from 'react';
import placeholderProfilePicture from '../../assets/profile-image-placeholder.png'

interface IPost{
    user?:{};
    text:string
}

const Post:FC<IPost> = (props) => {
    return (
        <div className={'Post'}>
            <div className={'TopBar'}>
                <img src={placeholderProfilePicture} className={'ProfilePicture'} alt={'profile image'}/>
                <span>username</span>
            </div>
            <div className={'Content'}>
                <p>{props.text}</p>
            </div>
            <div className={'Buttons'}>
                <a href={''}>👍</a>
                <a href={''}>👎</a>
                <a href={''}>comments</a>
                <a href={''}>share</a>
                <a href={''}>report</a>
            </div>
        </div>
    );
};

export default Post;