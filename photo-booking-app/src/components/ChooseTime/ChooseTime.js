import React from 'react';
import './styles.css';

const availability = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00']

let availabilityList = availability.map(slot => {
    return <button>{slot}</button>
})
    

// let itemList=items.map((item,index)=>{
//     return <li key={index}>{item}</li>
//   })

export function ChooseTime(){
    return (
        
        <div className="choose-time-container">
            <h1>Select a Time</h1>
            <div className="choose-time-button-container">
                {availabilityList}
            </div>
        </div>
    );
}

