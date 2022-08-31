import react, { useState } from 'react';
import styles from './ColorDisplay.module.css';
import { Interweave } from 'interweave';

const ColorDisplay = (props) => {

    // const boxes = [];
    // for (let i = 0; i < props.colors.length; i++){
    //     boxes.push(`<div style="background-color:${color}; width: ${props.sizes[props.colors.indexOf(color)]}px; height: ${props.sizes[props.colors.indexOf(color)]}px;"></div>`)
    // }
    const boxes = props.colors.map((color, index)=>`<div style="background-color:${color}; width: ${props.sizes[index]}px; height: ${props.sizes[index]}px;"></div>`).join("")

    return (
        <>
            <h1>Colors</h1>
           
            <Interweave content={boxes} className={styles.container}/>
           
        </>
    );
};
    
export default ColorDisplay;

