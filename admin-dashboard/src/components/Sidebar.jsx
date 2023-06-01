import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'; 
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons/lib';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const ShowSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
    <div className="sidebar">
        <Link to='#' className='menu-items'>
            <FaIcons.FaAlignJustify onClick={ShowSidebar}/>

        </Link>
    </div>

    <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={ShowSidebar}>
            <li className='navbar-toggle'>
                <Link to='#' className='menu-items'>
                    <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            {SidebarData.map((item,index) =>{
                return(
                    <li key={index} className={item.className}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
        
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Sidebar