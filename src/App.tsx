import React, {useState} from 'react';
import './App.css';
import CounterSet from './components/CounterSet/CounterSet';
import CounterFirst from "./components/CounterFirst/CounterFirst";

export type StateType = {
    count: number
    maxValue: number
    minValue: number
    setActive: boolean
    resetActive: boolean
    incActive: boolean
    onChangeCounter: boolean
    infoMessage: string
    error: string

}
export type DisplayType = {
    display: 1 | 2
}

export type addCountType = {
    addCount: (count: number) => void
}
export type resetCountType = {
    resetCount: () => void
}

function App() {
    let [state, setState] = useState({
        count: 0,
        maxValue: 10,
        minValue: 0,
        setActive: false,
        resetActive: true,
        incActive: false,
        onChangeCounter: false,
        infoMessage: "enter values and press 'set'",
        error: 'Invalid value!',
    })

    const addCount = (count: number) => {
        if (state.count < state.maxValue) {
            setState({...state, count: +count + 1, resetActive: false})
        }
    }

    const resetCount = () => {
        setState({...state, count: state.minValue})
    }
    const changeMaxValue = (maxValue: number) => {
        setState({
            ...state,
            maxValue: maxValue,
            setActive: true,
            resetActive: true,
            incActive: true
        })
    }
    const changeMinValue = (minValue: number) => {
        setState({...state,
            minValue: minValue,
            setActive: true,
            resetActive: true,
            incActive: true})
    }
    const setValues = () => {
        setState({...state,
            count: state.minValue,
            setActive: false,
            resetActive: true,
            incActive: false})
    }


    return (
        <div className="App">
            <CounterSet state={state} changeMaxValue={changeMaxValue} changeMinValue={changeMinValue}
                        setValues={setValues}/>
            <CounterFirst state={state} addCount={addCount} resetCount={resetCount}/>
        </div>
    );
}

export default App;
