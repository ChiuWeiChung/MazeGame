import {RenderRunner,Refresh,Toggle,HintToggler} from './index';

export enum ActionTypes{
    renderRunner,
    refresh,
    toggle,
    hint
}


export type Action =RenderRunner|Refresh|Toggle|HintToggler;