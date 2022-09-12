import React from 'react';
import {Display} from "../Display/Display";
import {Button} from "../Button/Button";
import {StateType} from "../../App";

type CounterSetPropsType = {
    state: StateType
    changeMaxValue: (maxValue: number) => void
    changeMinValue: (minValue: number) => void
    setValues: () => void
}

const CounterSet = (props: CounterSetPropsType) => {

    const changeMaxValue = (maxValue: number) => {
        props.changeMaxValue(maxValue)
    }
    const changeMinValue = (minValue: number) => {
        props.changeMinValue(minValue)
    }
    return (
        <div className='counterComponent'>
            <Display state={props.state} display={true} changeMaxValue={changeMaxValue} changeMinValue={changeMinValue} />
            <div className='btn-wrapper'>
                <Button  callback={props.setValues}  name={'set'} disable={!props.state.setActive}/>
            </div>
        </div>
    );
};

export default CounterSet;