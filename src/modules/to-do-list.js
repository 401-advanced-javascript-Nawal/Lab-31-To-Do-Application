import React from 'react';
// hook useState ( build-in )
import { useState , useEffect } from 'react';

function HooksToDoList(){

    const [complete,setComplete] = useState(false);
    const [difficulty,setDifficulty] = useState(0);

    const updateCounters = () => {
        let newStatus = !complete;
        if(newStatus === false) {
            newStatus = 'incomplete';
        } else {
            newStatus = 'complete';
        }
        setComplete(newStatus);

        setDifficulty()
    }

    return (
        <section>
            <form onSubmit = {}>
                <input onChange={}></input>
            </form>
            {
                items.map(item =>{
                    <p key={item}>{item}</p>
                })
            }
        </section>
    )

} // end of HooksToDoList function
