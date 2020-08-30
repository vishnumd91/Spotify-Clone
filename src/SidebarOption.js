import React from 'react';
import './SidebarOption.css';


function SidebarOption({title,Icon}) {
    return (
        <div className = 'sidebar_option'>
            {Icon && <Icon className='sidebaroption_icon'></Icon>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption;