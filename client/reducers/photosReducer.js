import Immutable from 'immutable';
import _ from 'lodash';

import constants from '../constants/constants';
import photosInitialState from '../initialState/photosInitialState';
import Store from '../store';

function photosReducer(state = photosInitialState.photos, action) {
    switch (action.type) {

        case constants.UPDATE_TEXTINPUT:
            state = state.set('searchValue', action.value);
            return state;       

        case constants.LOAD_PHOTOS:
            state = state.updateIn(['photoList'], (l) => l = Immutable.fromJS(action.photos));
            return state;

        case constants.COUNTER_UP:
            let counterUp = Store.getState().photos.get('currentPhoto'); 
            if(counterUp == 3)
                counterUp = -1;           
            state = state.set('currentPhoto', counterUp + 1);
            return state;

        case constants.COUNTER_DOWN:
            let counterDown = Store.getState().photos.get('currentPhoto'); 
            if(counterDown == 0)
                counterDown = 4;           
            state = state.set('currentPhoto', counterDown - 1);
            return state;

        default:
            return state;
    }
}

export default photosReducer;