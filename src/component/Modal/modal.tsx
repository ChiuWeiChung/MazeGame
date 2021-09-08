import './modal.scss';

type ModalProps = {
    currentPosition:number;
    end:number;
    restart:()=>void
}

function modal(props:ModalProps):JSX.Element{
    return(
        <div className={`modal ${props.currentPosition===props.end?'show':null}`}>
            <h2>Congratulations!</h2>
            <button onClick={props.restart} className="modal__btn">RESTART</button>
        </div>
    )
}

export default modal