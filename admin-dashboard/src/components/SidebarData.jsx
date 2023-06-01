import React from 'react';
//import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
//import * as IoIcons from "react-icons/io";

export const SidebarData = [
{
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    className: 'nav-text'
},

{
    title: 'Routes',
    path: '/routess',
    icon: <GiIcons.GiPathDistance/>,
    className: 'nav-text'
},

{
    title: 'Stations',
    path: '/stations',
    icon: <BiIcons.BiStation/>,
    className: 'nav-text'
},
{
    title: 'Bus',
    path: '/bus',
    icon: <BsIcons.BsBusFront/>,
    className: 'nav-text'
}
]
