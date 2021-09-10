
import { Action, ActionTypes } from '../actions/types'
import { Maze } from '../actions/index'
import Graph from '../../component/Graph/Graph';


const initialState = {
    graph: new Graph(8),
    position: 1,
    pacManForward: 'right',
    infoIsToggle: true,
    step: 0,
    showHint:false,
}


const mazeReducer = (state: Maze = initialState, action: Action) => {
    switch (action.type) {
        case (ActionTypes.renderRunner):
            return { ...state, position: action.payload.position, pacManForward: action.payload.pacManForward,step:action.payload.count+1 };
        case (ActionTypes.refresh):
            return { ...state, graph: new Graph(action.payload.size), position: 1, pacManForward: 'right', step: 0, showHint:false };
        case (ActionTypes.toggle):
            return { ...state, infoIsToggle: !action.payload.isToggle };
            case(ActionTypes.hint):
            return {...state, showHint:!action.payload.showHint}
        default:
            return state
    }
}

export default mazeReducer