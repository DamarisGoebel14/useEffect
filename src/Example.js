import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>



            <p>If you’re familiar with React class lifecycle methods, </p>
            <p>you can think of useEffect Hook as componentDidMount, componentDidUpdate, </p>
            <p>and componentWillUnmount combined.</p>
        </div>
    );
}

export default Example;