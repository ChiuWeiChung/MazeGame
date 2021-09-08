import Aux from '../../hoc/auxiliary';

type CalculatorProps = {
    count: number;
}

function calculator(props: CalculatorProps): JSX.Element {
    return (
        <Aux>
            <div>已使用步數:</div>
            <div>最佳步數:{props.count}</div>
            <div>提供最佳路徑</div>
            
        </Aux>
    )
}

export default calculator