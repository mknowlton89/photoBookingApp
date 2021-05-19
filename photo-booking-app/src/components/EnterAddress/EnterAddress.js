import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
export function EnterAddress({ appointmentData, setAppointmentData}) {

    let history = useHistory();

    function handleChange(field, value) {
        setAppointmentData(prevState => {
            return {
                ...prevState,
                [field]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        history.push('/book/date')
    }

    return (
        <div>
            <div>
                <h1>Enter The Property Address</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="streetAddress"
                    placeholder="Enter the street address"
                    onChange={(e) => handleChange("street", e.target.value)}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={(e) => handleChange("city", e.target.value)}
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    onChange={(e) => handleChange("state", e.target.value)}
                />
                <input
                    type="text"
                    name="zip"
                    placeholder="Zip Code"
                    onChange={(e) => handleChange("zip", e.target.value)}
                />
                <input
                    type="submit"
                    value="Lookup Address"
                />
            </form>
        </div>
    )
}