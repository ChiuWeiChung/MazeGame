import React from 'react';
import './modeSelector.scss';

type SelectorProps = {
    changeMode: (level: string, size: number) => void;
    mode: { level: string, size: number };
    refresh: (size?: number) => void;
}

function modeSelector(props: SelectorProps) {


    return (
        <div className="modeSelector__container">
            <div onClick={() => props.changeMode('easy', 8)} className="modeSelector__btn">
                <button className={props.mode.level === 'easy' ? 'actived' : ''}>Easy</button>
            </div>
            <div onClick={() => props.changeMode('normal', 10)} className="modeSelector__btn ">
                <button className={props.mode.level === 'normal' ? 'actived' : ''}>Normal</button>
            </div>
            <div onClick={() => props.changeMode('hard', 20)} className="modeSelector__btn">
                <button className={props.mode.level === 'hard' ? 'actived' : ''}>Hard</button>
            </div>
            <div onClick={() => props.refresh()} className="modeSelector__btn">
                <button className="refresh"><i className="fas fa-redo" ></i></button>
            </div>
        </div>
    )
}

export default modeSelector