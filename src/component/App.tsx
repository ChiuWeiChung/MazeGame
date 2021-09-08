import React from 'react'
import GameBoard from './GameBoard/GameBoard';
// import ModeSelector from './modeSelector/modeSelector';
import './App.scss';
import Footer from './Footer/Footer';



class App extends React.Component {

    state = {
        mode: { level: 'easy', size: 8 }
    }

    setMode = (level: string, size: number): void => {
        let changedMode = { ...this.state.mode };
        changedMode.level = level;
        changedMode.size = size;
        this.setState({ mode: changedMode });
    }


    render() {
        return (
            <div>
                <div className="Container">
                    <h1 className="title">Maze Runner</h1>
                    <GameBoard mode={this.state.mode} modeClicker={this.setMode} />
                    <Footer/>

                </div>
            </div>
        )
    }
}

export default App