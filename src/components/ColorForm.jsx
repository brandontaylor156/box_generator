import react, { useState } from 'react';
    

const ColorForm = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(100);                       
    
    // most of the component removed for brevity
const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewColor( color );
    props.onNewSize( size );
    setColor("");
    setSize(100);
};
    

    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Add Color</h1>
            <input type="text" onChange={(e)=>setColor(e.target.value)} value={color}/>
            <input type="number" min="100" onChange={(e)=>setSize(e.target.value)} value={size}/>

            <input type="submit" value="Add" />
        </form>
    );
};
    
export default ColorForm;