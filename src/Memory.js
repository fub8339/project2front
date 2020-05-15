import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {enterEditMode, leaveEditMode,startSavingMemory,startDeletingMemory} from './actions'

// const months = ["January", "February", "March","April","May","June","July","Auguest","September","October","November","December"];


export function Memory(props){
    const memory = props.memory;
    const dispatch = useDispatch();
    const [year,setYear] = useState(memory.year);
    const [month,setMonth] = useState(memory.month);
    const [day,setDay] = useState(memory.day);
    const [message,setMessage] = useState(memory.message);


    const onEdit = () =>{
        dispatch(enterEditMode(memory));
    }

    const onCancel = () =>{
        dispatch(leaveEditMode(memory));
    }

    const onSave = () =>{
        dispatch(startSavingMemory({
            id: memory.id,
            year,
            month,
            day,
            message
        }));
    }


    const onDelete =() =>{
        dispatch(startDeletingMemory(memory))
    }




    if(memory.isEditing){
        return(
            <div className = "memory">
                
                <div className = "memory-left">
                    <label>Name:</label>
                    <input type="text" onChange={e => setYear(parseInt(e.target.value))}/>
                    <label>Phone Number:</label>
                    <input type="text" onChange={e => setMonth(parseInt(e.target.value))}/>
                    <label>Email:</label>
                    <input type="text"  onChange={e => setDay(parseInt(e.target.value))}/>
                    <label>Campus:</label>
                    <input type="text"/>
                    
                    
                    <button onClick={onSave}>Save</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
                <div className = "memory-right">
                    <label>Item to sale: </label>
                    <input type="text"/>
                    <textarea placeholder="please enter item info" value={message} onChange={e => setMessage(e.target.value)}/>
                </div>
            </div>
        );
    }else{
        return(
            <div className = "memory">
                <div className = "memory-left">
                    <label>Name:</label>
                    <p>{memory.year}</p>
                    <label>Phone Number:</label>
                    <p>{memory.year}</p>
                    <label>Email:</label>
                    <p>{memory.year}</p>
                    <label>Campus:</label>
                    <p>{memory.year}</p>
                    
                    {/* <span className = "year">{memory.year}</span>
                    <span>{months[memory.month -1 ]}  {memory.day}</span> */}
                    <button onClick={onEdit}>edit</button>
                    <button onClick={onDelete} className="delete-button">delete</button>
                </div>
                <div className = "memory-right">
                <label>Item to sale:</label>
                <p>{memory.year}</p>
                <label>Item Infomation:</label>
                <p>This is item information,need to be pulled from database</p>
                </div>
            </div>
        );
    }
}