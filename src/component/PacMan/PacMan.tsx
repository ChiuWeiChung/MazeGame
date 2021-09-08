import './PacMan.scss';

interface PacManProps {
    direction: string;
    currentPosition: number;
    destination: number;
}

function pacMan(props: PacManProps): JSX.Element {
    return (
        <div
            className={`pacman pacman--${props.direction}`}
            style={props.currentPosition === props.destination ? { width: '100%', height: '100%' } : { }} >
            <div className="pacman__eye"></div>
            <div className="pacman__mouth"></div>
        </div>
    )
}

export default pacMan