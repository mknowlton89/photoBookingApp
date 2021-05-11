import React from 'react';
import { ChooseTime } from '../ChooseTime/ChooseTime';
import './styles.css';

export function BookingContainer(){
    return(
        <div className="booking-container">
            <ChooseTime />
        </div>
    )
}