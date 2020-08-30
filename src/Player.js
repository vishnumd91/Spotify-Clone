import React from 'react';
import './Player.css';
import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Player = ({spotify}) => {
    return(
        <div className = 'player'>
            <div className = 'player_body'>
                <Sidebar></Sidebar>
                <Body spotify></Body>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Player;