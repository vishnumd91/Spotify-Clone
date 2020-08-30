import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid,Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';



function Footer() {
    return (
        <div className = 'footer'>
            <div className = 'footer-left'>
                <img className = 'footer-albumLogo' src='https://img.youtube.com/vi/igulXNL1Kz0/maxresdefault.jpg' alt=''></img>
                <div className = 'footer-songInfo'>
                    <h4>Believer</h4>
                    <p>Imagine Dragons</p>
                </div>
            </div>
            <div className = 'footer-center'>
                <ShuffleIcon className = 'footer-green' />
                <SkipPreviousIcon className = 'footer-icon' />
                <PlayCircleOutlineIcon fontSize='large' className = 'footer-icon'/> 
                <SkipNextIcon className = 'footer-icon' />     
            </div>
            <div className = 'footer-right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon></PlaylistPlayIcon>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon></VolumeDownIcon>
                    </Grid>
                    <Grid item xs>
                        <Slider></Slider>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;