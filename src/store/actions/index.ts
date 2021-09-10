import { ActionTypes } from './types';
import Graph from '../../component/Graph/Graph';

export interface Maze {
    graph: Graph;
    position: number;
    pacManForward: string;
    infoIsToggle: boolean;
    step: number;
    showHint:boolean
}

export interface Refresh {
    type: ActionTypes.refresh;
    payload: {
        size: number
    }
}

export interface RenderRunner {
    type: ActionTypes.renderRunner;
    payload: {
        position: number;
        pacManForward: string;
        count: number;

    }
}

export interface Toggle {
    type: ActionTypes.toggle,
    payload: {
        isToggle: boolean
    }
}

export interface HintToggler{
    type:ActionTypes.hint,
    payload:{
        showHint:boolean
    }
}


export const renderRunner = (nextStep: number, direction: string, currentPosition: number, nextPosition: number[], count: number) => {
    if (!nextPosition.includes(currentPosition + nextStep)) {
        return {
            type: 'HIT_DEAD_END'
        }
    }
    return {
        type: ActionTypes.renderRunner,
        payload: {
            position: currentPosition + nextStep,
            pacManForward: direction,
            count
        }
    }
}

export const refresh = (size: number) => {
    return {
        type: ActionTypes.refresh,
        payload: {
            size
        }
    }
}

export const infoToggler = (isToggle: boolean) => {
    return {
        type: ActionTypes.toggle,
        payload: {
            isToggle
        }
    }
}


export const hintToggler = (showHint:boolean)=>{
    return{
        type:ActionTypes.hint,
        payload:{
            showHint
        }
    }
}
