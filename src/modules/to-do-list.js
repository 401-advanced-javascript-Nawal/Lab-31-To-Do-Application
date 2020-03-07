import React from 'react';
// hook useState ( build-in )
import { useState, useEffect } from 'react';

function HooksToDoList() {

    // const [complete,setComplete] = useState(false);
    // const [difficulty,setDifficulty] = useState(0);
    // const updateCounters = () => {
    //     let newStatus = !complete;
    //     if(newStatus === false) {
    //         newStatus = 'incomplete';
    //     } else {
    //         newStatus = 'complete';
    //     }
    //     setComplete(newStatus);

    //     setDifficulty()
    // }


    // set status if complete or incomplete 
    const [status, setStatus] = useState('complete');

    const [items, setItems] = useState([]);
    const [assignedTo, setAssignedTo] = useState('');

    const _changeAssigned = (e) => {
        setAssignedTo(e.target.value);
    } // end of _changeAssigned

    const _addItem = (e) => {
        e.preventDefault();
        e.target.reset();
        assignedTo && setItems([...items, assignedTo]);
    } // end of _addItem

    // const _updateCounters = () => {
    //     let newStatus = !status;
    //     setStatus(newStatus);
    // }
    /****************************************************** Use Effect ***********************************************/
    // for each render 
    // useEffect(() => {
    //     console.log('Welcome @ To Do List  ');
    // })

    // // for assignedTo 
    // useEffect(() => {
    //     console.log('assignedTo : ', assignedTo);
    // }, [assignedTo]);

    // for status 
    useEffect(() => {
        if (items.length>=1) { document.title = 'Complete' }
        else { document.title = 'Incomplete' }
    }, [items]);


    /****************************************************** Rendering ***********************************************/
    return (
        <section>
            <form onSubmit={_addItem}>
                <p> Enter Item To Do List : 
                <input onChange={_changeAssigned}></input> 
                </p>
            </form>
            {
                items.map(item => 
                    <p key={item}>{item}</p>
                )
            }
        </section>
    )

} // end of HooksToDoList function

export default HooksToDoList;