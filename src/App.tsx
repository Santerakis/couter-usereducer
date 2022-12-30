import React, {useReducer, useState} from 'react';
import './App.css';

const counterReducer = (counter: number, action: any) => {
    switch (action.type) {
        case 'add':
            return counter + 1
        case  'res':
            return 0
        default:
            return  counter
    }
}

function App() {
    const [num, dispatchNum] = useReducer(counterReducer, 0)  //применили другой инструмент(useReducer) стэйт менеджмента
    const incNumHandler = () => dispatchNum({type: 'add'})
    const resNumHandler = () => dispatchNum({type: 'res'})
    // const [num, setNum] = useState(0)
    // const incNumHandler = () => num < 5 && setNum(num + 1)
    // const resNumHandler = () => setNum(0)
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
