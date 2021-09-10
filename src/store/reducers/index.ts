import {combineReducers} from 'redux';
import {Maze} from '../actions/index';

import mazeReducer from './mazeReducer';


export interface StoreState{
    maze:Maze;

}

const reducers = combineReducers<StoreState>({
    maze:mazeReducer
})

export default reducers