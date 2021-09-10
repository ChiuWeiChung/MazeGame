import './PacMan.scss';
import {Maze} from '../../store/actions/index'
interface PacManProps {
    maze:Maze
}

function pacMan(props: PacManProps): JSX.Element {
    return (
        <div
            className={`pacman pacman--${props.maze.pacManForward}`}
            style={props.maze.position === props.maze.graph.answer.end ? { width: '100%', height: '100%' } : { }} >
            <div className="pacman__eye"></div>
            <div className="pacman__mouth"></div>
        </div>
    )
}

export default pacMan