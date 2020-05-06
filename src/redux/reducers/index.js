  
import { combineReducers } from 'redux';

// reducers
import brandsReducer from './brandsReducer';
import modelsReducer from './modelsReducer';
import versionsReducer from './versionsReducer';

const reducers = () => combineReducers({
    brands: brandsReducer,
    models: modelsReducer,
    versions: versionsReducer
})

export default reducers;