import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface INavElement{
    name:string
    url:string
    children?:INavElement[]
}

const NavElement:FC<INavElement> = (props) => {

    //TODO: show children on hover
    return (
        <Link className={'NavElement'} to={props.url}>
           <span>{props.name}</span>
        </Link>
    );
};

export default NavElement;