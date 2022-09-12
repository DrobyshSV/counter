import React, {useState} from 'react';
import {Display} from "../Display/Display";
import {Button} from "../Button/Button";
import {StateType} from "../../App";

type CounterFirstPropsType = {
    state: StateType
    addCount: (count: number) => void
    resetCount: (count: number) => void
}

const CounterFirst = (props: CounterFirstPropsType) => {
    const addCount = () => {
        if (props.state.count <= props.state.maxValue) {
            let count = props.state.count
            props.addCount(count)
        }
    }
    const resetCount = () => {
        props.resetCount(props.state.minValue)
    }

    let disableInc = props.state.count === props.state.maxValue ? true : props.state.incActive
    let disableRes = props.state.count === props.state.minValue ? true : props.state.resetActive

    return (
        <div className='counterComponent'>
            <Display state={props.state} display={false}/>
            <div className='btn-wrapper'>
                <Button callback={addCount} disable={disableInc} name={'inc'}/>
                <Button callback={resetCount} disable={disableRes} name={'reset'}/>

            </div>
        </div>
    );
};

export default CounterFirst;