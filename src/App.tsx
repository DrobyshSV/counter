import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {Display} from "./components/Display/Display";

function App() {
    let [count, setCount]  = useState(0)
    const addCount = () => {
        if (count <= 4) {
            setCount(count+1)
        }
        if (count === 4) {

        }
    }
    const resetCount = () => {
       setCount(0)
    }
    let disableInc = count === 5 ? true : false
    let disableRes = count === 0 ? true : false
    return (
        <div className="App">
            <Display count={count}/>
            <div className='btn-wrapper'>
                <Button callback={addCount} disable={disableInc}  name={'inc'} />
                <Button callback={resetCount} disable={disableRes} name={'reset'}/>
            </div>

        </div>
    );
}

export default App;
