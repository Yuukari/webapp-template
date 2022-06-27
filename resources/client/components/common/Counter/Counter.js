import { Button, Card } from "@blueprintjs/core";

import { useStore } from "./store";

import "./Counter.scss";

const Counter = (props) => {
    const [ count, setCount ] = useStore.count();

    const increment = () => {
        setCount((v) => ++v);
    }

    const decrement = () => {
        if (count > 0)
            setCount((v) => --v);
    }

    return (
        <Card className="counter">
            <h4 class="bp4-heading counter__value">You clicked {count} time(s)</h4>

            <p>This example uses Teaful for component state management</p>

            <div className="counter__actions">
                <Button icon="plus" intent="primary" text="Increment" onClick={increment}/>
                <Button icon="minus" text="Decrement" onClick={decrement}/>
            </div>
        </Card>
    )
}

export default Counter;