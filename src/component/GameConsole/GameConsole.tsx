import './GameConsole.scss';

import React from 'react';
import ModeSelector from '../modeSelector/modeSelector';
import Calculator from '../Calculator/calculator';
import Controller from '../Controller/controller';

import { Maze } from '../../store/actions/index';
import { StoreState } from '../../store/reducers/index'

import { connect } from 'react-redux';
import { infoToggler, renderRunner, hintToggler } from '../../store/actions/index';

interface GameConsoleProps {
    mode: { level: string, size: number };
    modeClicker: (level: string, size: number) => void;
    initGame: () => void;
    // ========Redux========
    renderRunner: Function;
    infoToggler: Function;
    hintToggler: Function;
    maze: Maze
}

class GameConsole extends React.Component<GameConsoleProps, {}> {

    render() {
        return (
            <div className="gameboard__console">
                <div onClick={() => this.props.infoToggler(this.props.maze.infoIsToggle)} className="toggler">
                    {this.props.maze.infoIsToggle ? <i className="fas fa-sort-up"></i> : <i className="fas fa-sort-down"></i>}
                </div>
                <div className={`gameboard__console__info ${this.props.maze.infoIsToggle ? '' : 'hide'}`}>
                    <div className="modeselector">
                        <ModeSelector
                            clicked={this.props.modeClicker}
                            refresh={this.props.initGame}
                            mode={this.props.mode}
                        />
                    </div>
                    <div className="calculator">
                        <Calculator
                            count={this.props.maze.graph.answer.count}
                            usedStep={this.props.maze.step}
                            hintToggler={()=>this.props.hintToggler(this.props.maze.showHint)}
                        />
                    </div>
                </div>
                <div className="gameboard__console__controller">
                    <Controller
                        renderRunner={this.props.renderRunner}
                        size={this.props.mode.size}
                        maze={this.props.maze}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState): { maze: Maze } => {
    return {
        maze: state.maze
    }
}

export default connect(mapStateToProps, { infoToggler, renderRunner, hintToggler })(GameConsole)