import React from 'react';
import Graph from '../Graph/Graph';
import './GameBoard.scss';

import Modal from '../Modal/modal';
import ModeSelector from '../modeSelector/modeSelector';
import Controller from '../Controller/controller';
import PacMan from '../PacMan/PacMan';
import Calculator from '../Calculator/calculator';

interface GameBoardProps {
    mode: { level: string, size: number };
    modeClicker: (level: string, size: number) => void;
}

interface GameBoardState {
    graph: Graph;
    position: number;
    pacManForward: string;
    infoIsToggle: boolean;
}


class GameBoard extends React.Component<GameBoardProps, GameBoardState>{

    state = {
        graph: new Graph(this.props.mode.size),
        position: 1,
        pacManForward: 'right',
        infoIsToggle: true,
    }

    componentDidMount() {
        document.querySelector('body')?.addEventListener('keydown', this.keyController);
    }

    keyController = (e: KeyboardEvent) => {
        switch (e.code) {
            case ('ArrowLeft'):
                return this.renderRunner(-1, 'left');
            case ('ArrowRight'):
                return this.renderRunner(1, 'right');
            case ('ArrowDown'):
                return this.renderRunner(this.props.mode.size, 'down');
            case ('ArrowUp'):
                return this.renderRunner(-this.props.mode.size, 'up');
            default:
                return
        }
    }

    componentDidUpdate(prevProps: GameBoardProps) {
        if (prevProps.mode.level !== this.props.mode.level) {
            this.initGame();
        }
    }

    renderPac = (blockLocation: number): JSX.Element | null => {
        if (blockLocation + 1 === this.state.position) {
            return (
                <PacMan direction={this.state.pacManForward} currentPosition={this.state.position} destination={this.state.graph.answer.end} />
            )
        } else if (blockLocation + 1 === this.state.graph.answer.end && (this.state.graph.answer.end !== this.state.position)) {
            return (
                <div className="target"></div>
            )
        }
        return null
    }

    renderMaze = (): JSX.Element[] => {
        let arr = [];
        this.state.graph.createMaze();
        for (let key in this.state.graph.adjacentList) {
            arr.push(this.renderWall(key, this.state.graph.adjacentList[key]))
        }
        return arr.map((el, index) => {
            return (
                <div key={index + 1} className={`gameboard__playground--${this.props.mode.level} vertex ${el.join(' ')}`}>
                    {this.renderPac(index)}
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

    // goto redux
    renderRunner = (nextStep: number, direction: string): void => {
        let currentPosition = this.state.position;
        let nextPosition = this.state.graph.adjacentList[currentPosition];
        if (!nextPosition.includes(currentPosition + nextStep)) return
        this.setState({ position: (currentPosition + nextStep), pacManForward: direction });
        if (this.state.position === this.state.graph.answer.end) {
            document.querySelector('body')?.removeEventListener('keydown', this.keyController)
        }
    }


    //goto redux
    initGame = (): void => {
        this.setState({
            graph: new Graph(this.props.mode.size),
            position: 1,
            pacManForward: 'right'
        })
        document.querySelector('body')?.addEventListener('keydown', this.keyController);
    }
    
    //goto redux
    infoToggler = () => {
        this.setState((prevState) => {
            return {
                infoIsToggle: !prevState.infoIsToggle
            }
        })
    }

    render() {
        return (

            <div className='gameboard'>
                <div className="gameboard__playground">
                    <Modal
                        currentPosition={this.state.position}
                        end={this.state.graph.answer.end}
                        restart={this.initGame}
                    />
                    <div className='gameboard__playground__maze'>
                        {this.renderMaze()}
                    </div>
                </div>
                <div className="gameboard__console">
                    <div onClick={this.infoToggler} className="toggler">
                        {this.state.infoIsToggle ? <i className="fas fa-sort-up"></i> :<i className="fas fa-sort-down"></i>}
                    </div>
                    <div className={`gameboard__console__info ${this.state.infoIsToggle ? '' : 'hide'}`}>
                        <div className="modeselector">
                            <ModeSelector
                                clicked={this.props.modeClicker}
                                refresh={this.initGame}
                                mode={this.props.mode}
                            />
                        </div>
                        <div className="calculator">
                            <Calculator
                                count={this.state.graph.answer.count}
                            />
                        </div>
                    </div>
                    <Controller
                        renderRunner={this.renderRunner}
                        size={this.props.mode.size}
                        currentPosition={this.state.position}
                        end={this.state.graph.answer.end}
                    />
                </div>
            </div>
        )
    }
}

export default GameBoard