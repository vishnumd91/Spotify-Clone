import React from 'react';
import './Body.css';
import Header from './Header';
import SongRow from './SongRow';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body({spotify}) {
    const [discover_weekly,dispatch] = useDataLayerValue();
    return (
        <div className = 'body'>
            <Header spotify={spotify}></Header>
            <div className='body-info'>
                <img src={discover_weekly?.images[0].url} alt=''></img>
                <div className='body-infoText'>
                   <strong>PLAYLIST</strong>
                   <h2>Discover Weekly</h2> 
                   <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className = 'body-songs'>
                <div className = 'body-icons'>
                    <PlayCircleFilledIcon className = 'body-shuffle'></PlayCircleFilledIcon>
                    <FavoriteIcon fontSize = 'large'></FavoriteIcon>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track}></SongRow>
                ))}
            </div>
        </div>
    )
}

export default Body;