import React, { PropTypes } from 'react';
import { Image } from 'react-bootstrap';

import Navigation from './Navigation';

const Photo = ({ photo }) => {

    if (photo) {
        let path = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

        return (
            <div style={{border: 'solid 3px black', 
                        display: 'flex', 
                        flexDirection:'row', 
                        justifyContent:'space-between' }}>

                <Navigation direction={'left'} />
                <Image style={{ display: 'block', margin: 'auto' }} src={path} responsive />
                <Navigation direction={'right'} />
                
            </div>
        );

    } else {

        return (
            <div>
            </div>
        );
    }
};

export default Photo;