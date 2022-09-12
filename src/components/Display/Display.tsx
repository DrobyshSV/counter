import React, {ChangeEvent} from 'react';
import c from './Display.module.css'
import {StateType} from "../../App";

type DisplayPropsType = {
    state: StateType
    changeMaxValue: (maxValue: number) => void
    changeMinValue: (minValue: number) => void
    display: boolean
}
export const Display = (props: DisplayPropsType) => {
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = +e.currentTarget.value;
        props.changeMaxValue(maxValue)
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let minValue = +e.currentTarget.value;
        props.changeMinValue(minValue)
    }

    return (
        <div className={props.state.count === props.state.maxValue &&  props.display === false ? `${c.display} maxValue` : `${c.display} `}>
            {props.display === true
                ? <>
                    <div>
                        <span>maxValue:</span>
                        <input onChange={onChangeMaxValueHandler} type={"number"} value={props.state.maxValue}/>
                    </div>
                    <div>
                        <span>minValue:</span>
                        <input onChange={onChangeMinValueHandler} type={"number"} value={props.state.minValue} />
                    </div>
                </>
                : props.state.minValue < 0 ?  props.state.error : props.state.setActive ? props.state.infoMessage : props.state.count}
        </div>
    );
};

