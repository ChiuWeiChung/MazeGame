import { Maze } from '../../store/actions/index';
import Aux from '../../hoc/auxiliary';

type ControllerProps = {
    renderRunner: Function;
    size: number;
    maze: Maze;
}

function controller(props: ControllerProps): JSX.Element {
    const clicker = (step: number, direction: string): void => {
        let currentPosition = props.maze.position;
        let nextPosition = props.maze.graph.adjacentList[currentPosition];
        if (props.maze.position !== props.maze.graph.answer.end) {
            props.renderRunner(step, direction, currentPosition, nextPosition,props.maze.step);
        }
    }

    return (
        <Aux>
            <div onClick={() => clicker(-props.size, 'up')}>&uarr;</div>
            <div onClick={() => clicker(-1, 'left')}>&larr;</div>
            <div onClick={() => clicker(props.size, 'down')} >&darr;</div>
            <div onClick={() => clicker(1, 'right')}>&rarr;</div>
        </Aux>
    )
}

export default controller