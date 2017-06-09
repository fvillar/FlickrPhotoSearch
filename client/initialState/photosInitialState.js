import Immutable from 'immutable';

export default {
    photos: Immutable.fromJS({
        photoList: [],
        currentPhoto: 0,
        searchValue: ''
    })
};