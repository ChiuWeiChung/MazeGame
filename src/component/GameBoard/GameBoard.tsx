import React from 'react';
import './GameBoard.scss';

import Modal from '../Modal/modal';
import PacMan from '../PacMan/PacMan';
import GameConsole from '../GameConsole/GameConsole';

import { connect } from 'react-redux';
import { StoreState } from '../../store/reducers/index';
import { Maze, renderRunner, refresh } from '../../store/actions/index';

interface GameBoardProps {
    mode: { level: string, size: number };
    modeClicker: (level: string, size: number) => void;
    // ========Redux========
    renderRunner: Function;
    refresh: Function;
    maze: Maze
}

class GameBoard extends React.Component<GameBoardProps, {}>{

    componentDidMount() {
        document.querySelector('body')?.addEventListener('keydown', this.keydownListener);
    }

    componentDidUpdate(prevProps: GameBoardProps) {
        if (prevProps.mode.level !== this.props.mode.level) this.initGame();
        if (this.props.maze.position === this.props.maze.graph.answer.end) {
            document.querySelector('body')?.removeEventListener('keydown', this.keydownListener)
        }
    }

    keydownListener = (e: KeyboardEvent): void => {
        let currentPosition = this.props.maze.position;
        let nextPosition = this.props.maze.graph.adjacentList[currentPosition];
        switch (e.code) {
            case ('ArrowLeft'):
                this.props.renderRunner(-1, 'left', currentPosition, nextPosition,this.props.maze.step);
                break
            case ('ArrowRight'):
                this.props.renderRunner(1, 'right', currentPosition, nextPosition,this.props.maze.step);
                break
            case ('ArrowDown'):
                this.props.renderRunner(this.props.mode.size, 'down', currentPosition, nextPosition,this.props.maze.step);
                break
            case ('ArrowUp'):
                this.props.renderRunner(-this.props.mode.size, 'up', currentPosition, nextPosition,this.props.maze.step);
                break
        }
    }
    renderPacAndTarget = (blockLocation: number): JSX.Element | null => {
        if (blockLocation === this.props.maze.position) {
            return <PacMan maze={this.props.maze} />
        } else if (blockLocation === this.props.maze.graph.answer.end && (this.props.maze.graph.answer.end !== this.props.maze.position)) {
            return <div className="target"></div>
        }
        return null
    }

    renderMaze = (): JSX.Element[] => {
        let arr = [];
        for (let key in this.props.maze.graph.adjacentList) {
            arr.push(this.renderWall(key, this.props.maze.graph.adjacentList[key]))
        }
        return arr.map((el, index) => {
            let show =null;
            if(this.props.maze.showHint){
                show = this.props.maze.graph.solutionPath.includes(index+1)?true:false
            }
            return (
                <div 
                key={index + 1}  
                className={`${this.props.mode.level} ${show?'hint':''} vertex ${el.join(' ')}`}
                >
                    {this.renderPacAndTarget(index + 1)}
                </div>
            )
        })
    }

    renderWall(key: string, arr: number[]): string[] {
        const directions: string[] = [];
        arr.forEach(el => {
            if (el === parseInt(key) + 1) directions.push('right');
            if (el === parseInt(key) - 1) directions.push('left');
            if (el === parseInt(key) + this.props.mode.size) directions.push('bottom');
            if (el === parseInt(key) - this.props.mode.size) directions.push('top');
        })
        return directions
    }

    initGame = (): void => {
        this.props.refresh(this.props.mode.size);
        document.querySelector('body')?.addEventListener('keydown', this.keydownListener);
    }

    render() {
        // console.log(this.props.maze.showHint)
        return (
            <div className='gameboard'>
                <div className="gameboard__playground">
                    <Modal
                        currentPosition={this.props.maze.position}
                        end={this.props.maze.graph.answer.end}
                        restart={this.initGame}
                    />
                    <div className='gameboard__playground__maze'>
                        {this.renderMaze()}
                    </div>
                </div>
                <GameConsole
                    mode={this.props.mode}
                    modeClicker={this.props.modeClicker}
                    initGame={this.initGame}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState): { maze: Maze } => {
    return {
        maze: state.maze
    }
}

export default connect(mapStateToProps, { renderRunner, refresh })(GameBoard)