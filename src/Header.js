import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [user,dispatch]= useDataLayerValue();
    return (
        <div className = 'header'>
            <div className = 'header-left'>
                <SearchIcon></SearchIcon>
                <input placeholder = 'Search for Artists,Songs'></input>
            </div>
            <div className = 'header-right'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}></Avatar>
                    <h4>{user?.display_name}</h4>
            </div>

        </div>
    )
}

export default Header;