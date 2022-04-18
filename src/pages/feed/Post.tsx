import React, {FC} from 'react';

interface IPost{
    text:string
}

const Post:FC<IPost> = (props) => {
    return (
        <div className={'Post'}>
            {props.text}
        </div>
    );
};

export default Post;