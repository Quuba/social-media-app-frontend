import React from 'react';
import Post from "./Post";
import './FeedPageStyle.css'
import Header from "../../common/Header";

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque rutrum arcu, non tincidunt quam maximus eu. In elementum a nibh non bibendum. Sed feugiat, felis non pellentesque consectetur, enim ante faucibus ante, vel ultricies tortor urna pretium velit. Quisque ac pellentesque mi. Sed at ultricies est, vitae tempus lacus."

const FeedPage = () => {
    return (
        <>
            <Header/>
        <div className={'FeedPage'}>
            <h2>Feed</h2>
            <div className={'PostList'}>
                <Post text={loremIpsum}/>
                <Post text={loremIpsum}/>
                <Post text={loremIpsum}/>
                <Post text={loremIpsum}/>
                <Post text={loremIpsum}/>
                <Post text={loremIpsum}/>
                <Post text={loremIpsum}/>

            </div>
        </div>
        </>
    );
};

export default FeedPage;