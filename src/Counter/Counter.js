import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>{counter}</div>);

};

export default Counter;