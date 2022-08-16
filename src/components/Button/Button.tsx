import React from 'react';
type ButtonPropsType = {
    name: string
    callback: () =>void
    disable: boolean
}
export const Button = (props:ButtonPropsType) => {

    return (
        <button disabled={props.disable} onClick={props.callback}>{props.name}</button>

    );
};

