import React from 'react';
import NavElement from "./NavElement";


const Header = () => {
    return (
        <div className={'Header'}>
            <NavElement name={'home'} url={'/home'}/>

            {
                localStorage.getItem('logged') == 'true' ?
                <NavElement name={'account'} url={'/account'}/> :
                <NavElement name={'sign up/ sign in'} url={'/register'}/>
            }

        </div>
    );
};

export default Header;