import Aux from '../../hoc/auxiliary';

type CalculatorProps = {
    count: number;
    usedStep:number;
    hintToggler:()=>void;
}

function calculator(props: CalculatorProps): JSX.Element {
    return (
        <Aux>
            <div>已使用步數:{props.usedStep}</div>
            <div>最佳步數:{props.count}</div>
            <button onClick={props.hintToggler}>提示</button>
            
        </Aux>
    )
}

export default calculator