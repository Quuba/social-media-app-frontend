import React from 'react';
import NavElement from "./NavElement";


const Header = () => {
    return (
        <div className={'Header'}>
            <NavElement name={'Home'} url={'/HomePage'}/>
            <NavElement name={'Account'} url={'/AccountPage'}/>


        </div>
    );
};

export default Header;