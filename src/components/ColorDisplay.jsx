import react, { useState } from 'react';
import styles from './ColorDisplay.module.css';
import { Interweave } from 'interweave';

const ColorDisplay = (props) => {

    const boxes = [];
    for (let i = 0; i < props.colors.length; i++){
        boxes.push(`<div style="background-color:${props.colors[i]}; width: ${props.sizes[i]}px; height: ${props.sizes[i]}px;"></div>`)
    }
    const boxesString = boxes.join("");

    return (
        <>
            <h1>Colors</h1>
           
            <Interweave content={boxesString} className={styles.container}/>
           
        </>
    );
};
    
export default ColorDisplay;

