import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {enterEditMode, leaveEditMode,startSavingMemory,startDeletingMemory} from './actions'

// const months = ["January", "February", "March","April","May","June","July","Auguest","September","October","November","December"];


export function Memory(props){
    const memory = props.memory;
    const dispatch = useDispatch();
    const [userName,setUserName] = useState(memory.userName);
    const [phone_Number,setPhoneNumber] = useState(memory.phone_Number);
    const [email,setEmail] = useState(memory.email);
    const [campus,setCampus] = useState(memory.campus);
    const [itemName,serItemName] = useState(memory.itemName);
    const [itemInfo,setItemInfo] = useState(memory.itemInfo);


    const onEdit = () =>{
        dispatch(enterEditMode(memory));
    }

    const onCancel = () =>{
        dispatch(leaveEditMode(memory));
    }

    const onSave = () =>{
        dispatch(startSavingMemory({
            id: memory.id,
            userName,
            phone_Number,
            email,
            campus,
            itemName,
            itemInfo,
        }));
    }


    const onDelete =() =>{
        dispatch(startDeletingMemory(memory))
    }




    if(memory.isEditing){
        return(
            <div className = "card">
                
                <div className = "card-left">
                    <label>Name:</label>
                    <input type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
                    <label>Phone Number:</label>
                    <input type="text" value={phone_Number} onChange={e => setPhoneNumber(e.target.value)}/>
                    <label>Email:</label>
                    <input type="text" value={email}  onChange={e => setEmail(e.target.value)}/>
                    <label>Campus:</label>
                    <input type="text" value={campus} onChange={e => setCampus(e.target.value)}/>
                    
                    
                    <button onClick={onSave}>Save</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
                <div className = "card-right">
                    <label>Item to sale: </label>
                    <input type="text" onChange={e => serItemName(e.target.value)}/>
                    <textarea placeholder="please enter item info"  onChange={e => setItemInfo(e.target.value)}/>
                </div>
            </div>
        );
    }else{
        return(
            <div className = "card">
                <div className = "card-left">
                    <label>Name:</label>
                    <p>{memory.userName}</p>
                    <label>Phone Number:</label>
                    <p>{memory.phone_Number}</p>
                    <label>Email:</label>
                    <p>{memory.email}</p>
                    <label>Campus:</label>
                    <p>{memory.campus}</p>
                    
                    {/* <span className = "year">{memory.year}</span>
                    <span>{months[memory.month -1 ]}  {memory.day}</span> */}
                    <button onClick={onEdit}>edit</button>
                    <button onClick={onDelete} className="delete-button">delete</button>
                </div>
                <div className = "card-right">
                <label>Item to sale:</label>
                <p>{memory.itemName}</p>
                <label>Item Infomation:</label>
                <p>{itemInfo}</p>
                </div>
            </div>
        );
    }
}