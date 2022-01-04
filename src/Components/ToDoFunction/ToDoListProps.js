import React, { useState } from "react";
let count = 1;
const ToDoListItems = () => {
    let id = 0
    let value = ''
    const [listInput, setListInput] = useState([id, value])

    function handleEditItem(){
        setListInput(prev => prev.map(item => item.id === id ? {...item, value} : value))
    }
    function handleDeleteItem(){
        setListInput(prev => prev.filter(item => item.id !== id))
    }
    function handleAddItem(){
        let index = 0;
        const addedItem = {id: count++, value: ''};
        setListInput(prev => [...prev.slice(0, index + 1), addedItem, ...prev.slice(index + 1)])
    }
    return(
        <>
            {
                listInput.map((item, index) =>(
                    <div key={item.id}>
                        <input
                            value={item.value}
                            onChange={e => handleEditItem(e.currentTarget.value, item.id)}
                        />
                        <button onClick={() => handleAddItem(index)}>
                            +
                        </button>
                        <button onClick={() => handleDeleteItem(index)}>
                            -
                        </button>
                    </div>
                ))
            }
        </>
    );
}
export default ToDoListItems;