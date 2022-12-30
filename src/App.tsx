import React, {useState} from 'react';
import './App.css';

function App() {
    const [num, setNum] = useState(0)
    const incNumHandler = () => num < 5 && setNum(num + 1)
    const resNumHandler = () => setNum(0)
    return (
        <div className="App">
            <div>{num}</div>
            <div>
                <button onClick={incNumHandler}>inc</button>
                <button onClick={resNumHandler}>res</button>
            </div>

        </div>
    );
}

export default App;
