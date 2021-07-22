import React from 'react';


const Item = (props) => {
    return <>
    <li><pre><button className='but_2'  onClick={()=>{
        props.onSelect(props.id);
    }}>x</button> {props.text}</pre></li>
    </>;
};

export default Item;