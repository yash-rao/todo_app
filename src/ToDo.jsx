import React, { useState } from 'react';
import Item from './Item.jsx'
const ToDo = () => {

    const [inputItem, setInputItem] = useState();
    const [items, setItems] = useState([]);

    const itemEvent = (x) => {
        setInputItem(x.target.value);
    };

    const listOfItems = () => {
        if(inputItem !== ''){
        setItems((olditems)=>{
            return [...olditems,inputItem];
        })
        }
        setInputItem('');
    };

    const Delete = (id) => {
        console.log("Deleted");
        setItems((olditems)=>{
            return olditems.filter((arr_ele, index) => {
                return index !== id;
            });
        });
    };

    return <>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type='text' value={inputItem}  placeholder='Enter item name' onChange={itemEvent}/>
            <button className='but_1' onClick={listOfItems}>+</button>
            <ul>
                {items.map((item_name,index)=>{
                    return <Item text={item_name} key={index} id={index} onSelect={Delete} />;
                })}
            </ul>
        </div>
    </div>
    </>
};

export default ToDo;