/* eslint-disable no-unused-vars */
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [playlists,dispatch] = useDataLayerValue();
    return (
        <div className = 'sidebar'>
            <img className = 'sidebar_logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=''></img>    
            <SidebarOption title='Home' Icon={HomeIcon}></SidebarOption>    
            <SidebarOption title='Search' Icon={SearchIcon}></SidebarOption>    
            <SidebarOption title='Category' Icon={LibraryMusicIcon}></SidebarOption>    
            <br />
            <strong className = 'sidebar_title'>PLAYLISTS</strong>
            <hr />

            {playlists?.item?.map(playlist => (
                <SidebarOption title = {playlist.name}></SidebarOption>
            ) )}
            
        </div>
    )
}

export default Sidebar;

