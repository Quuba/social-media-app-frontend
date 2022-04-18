import React from 'react';
import Post from "./Post";
import './FeedPageStyle.css'

const FeedPage = () => {
    return (
        <div className={'FeedPage'}>
            <h2>Feed</h2>
            <div className={'PostList'}>
                <Post text={'Lorem Ipsum'}/>
                <Post text={'Lorem Ipsum'}/>
                <Post text={'Lorem Ipsum'}/>
                <Post text={'Lorem Ipsum'}/>
                <Post text={'Lorem Ipsum'}/>
                <Post text={'Lorem Ipsum'}/>
                <Post text={'Lorem Ipsum'}/>
                <Post text={'Lorem Ipsum'}/>
                <Post text={'Lorem Ipsum'}/>
                <Post text={'Lorem Ipsum'}/>

            </div>
        </div>
    );
};

export default FeedPage;