import React from 'react';
import './controller.scss';
type SelectorProps = {
    renderRunner: (size: number, direction: string) => void;
    size: number;
    currentPosition: number;
    end: number;
}

function controller(props: SelectorProps): JSX.Element {
    // console.log('=====')
    // console.log(props.currentPosition)
    // console.log(props.end)
    // console.log('=====')
    const clicker = (step: number, direction: string):void => {
        if (props.currentPosition !== props.end) {
            props.renderRunner(step, direction);
        }
    }

    return (
        <div className="controller">
            <div onClick={() => clicker(-props.size, 'up')}>&uarr;</div>
            <div onClick={() => clicker(-1, 'left')}>&larr;</div>
            <div onClick={() => clicker(props.size, 'down')} >&darr;</div>
            <div onClick={() => clicker(1, 'right')}>&rarr;</div>
        </div>
    )
}

export default controller