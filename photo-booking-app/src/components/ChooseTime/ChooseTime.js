import React from 'react';
import './styles.css';

const availability = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00'];
const appointments = ['10:00', '1:00'];

let availabilityList = availability.filter((slot) => !appointments.includes(slot));

let availabilityListToPrint = availabilityList.map((slot) => {
    return <button>{slot}</button>
})

export function ChooseTime() {
    return (

        <div className="choose-time-container">
            <h1>Select a Time</h1>
            <div className="choose-time-button-container">
                {availabilityListToPrint}
            </div>
        </div>
    );
}

