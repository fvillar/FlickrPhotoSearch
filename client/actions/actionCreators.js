import axios from 'axios';
import _ from 'lodash';

import Constants from '../constants/constants';
import photosInitialState from '../initialState/photosInitialState';

/* eslint-disable no-console */

class PhotoActions {

    static updateTextInput(value) {
        return {
            type: Constants.UPDATE_TEXTINPUT,
            value: value
        };
    }

    static loadPhotos(photos) {
        return {
            type: Constants.LOAD_PHOTOS,
            photos: photos
        };
    }

    static counterUp() {
        return {
            type: Constants.COUNTER_UP
        };
    }

    static counterDown() {
        return {
            type: Constants.COUNTER_DOWN
        };
    }

    // =============================================== //
    // =============== ASYNC CALLS =================== //
    // =============================================== //

    static loadPhotosAsync(searchValue) {

        let apiKey = 'fda49c8cb3942dab1d64780f08ed71fe';

        return function (dispatch) {
            axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchValue}&per_page=4&format=json&nojsoncallback=1`)
                .then(function (response) {
                    dispatch(PhotoActions.loadPhotos(response.data.photos.photo));
                    dispatch(PhotoActions.updateTextInput(''));
                })
                .catch(function (response) {
                    console.log('Error in loadCoursesAsync ' + response);
                });
        };
    }
}

export default PhotoActions;