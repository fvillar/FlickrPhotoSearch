import React, { PropTypes } from 'react';

import Photo from './Photo';
import PhotoStrip from './PhotoStrip';

const Pics = ({photos, currentPhoto}) => {    
    return (
        <div>
            <Photo photo={photos.toJS()[currentPhoto]}/>
            <PhotoStrip photos={photos.toJS()} />
        </div>
    );
};

export default Pics;