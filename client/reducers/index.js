import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import photosReducer from './photosReducer';

const rootReducer = combineReducers({ 
    photos: photosReducer,
    routing: routerReducer 
});

export default rootReducer;
