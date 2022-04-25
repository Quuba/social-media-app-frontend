import React from 'react';
import NavElement from "./NavElement";


const Header = () => {
    return (
        <div className={'Header'}>
            <NavElement name={'Home'} url={'/home'}/>
            <NavElement name={'Account'} url={'/account'}/>

        </div>
    );
};

export default Header;