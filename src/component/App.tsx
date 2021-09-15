import React from 'react'
import GameBoard from './GameBoard/GameBoard';
// import GameConsole from './GameConsole/GameConsole';
import './App.scss';
import Footer from './Footer/Footer';


interface AppProps {
}

interface AppState {
    mode: { level: string, size: number };
}

class App extends React.Component<AppProps, AppState> {

    state = {
        mode: { level: 'easy', size: 8 }
    }

    changeMode = (level: string, size: number): void => {
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
                    <GameBoard mode={this.state.mode} changeMode={this.changeMode} />
                    <Footer />

                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state:StoreState):{something:Something} => {
//     return {
//       something: state.something,
//     };
//   };

export default App