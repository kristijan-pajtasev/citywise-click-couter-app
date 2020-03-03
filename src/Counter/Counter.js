import React, {useState} from 'react';

const Counter = (props) => {
    const initialValue = props.initialValue ? props.initialValue : 0;
    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(counter + 1);
    };

    const reset = () => {
        setCounter(initialValue);
    };

    return (
        <div>
            <div>{counter}</div>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>);

};

export default Counter;