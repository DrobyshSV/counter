import React from 'react';
import c from './Display.module.css'
type DisplayPropsType ={
    count: number
}
export const Display = (props:DisplayPropsType) => {
    return (
        <div className={c.display}>
            {props.count}
        </div>
    );
};

