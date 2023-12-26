import React, {useState} from 'react';
import "./BookingForm.css";


const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("Time");
    const [numGuest, setNumGuest] = useState(0);
    const [occasion, setOccasion] = useState("Occasion");

    const timeOptions = availableTimes.map(times => {
        return(
            <option key={times}>{times}</option>
        )
    });

    const clearForm = () => {
        setDate("");
        setTime("Time");
        setNumGuest(0);
        setOccasion("Occasion");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reserved!");
        clearForm();
        return submitForm(e.target.values);
    }
  return (
    <>
        <div className='form_main'>
            <h2>Reserve a Table</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Choose Date:</label>
                <input
                    type="date"
                    className='form_input'
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value)
                        dispatch({type:'add', date: e.target.value});
                    }}
                    required
                />
                <label htmlFor="time">Choose Time:</label>
                <select
                    type="time"
                    className="form_input"
                    name="time"
                    placeholder="00:00"
                    id="time"
                    value={time}
                    onChange={(e) => {
                    setTime(e.target.value);
                    }}
                    required
                >
                    {timeOptions}
                </select>
                <label htmlFor="guests">Number of Guests:</label>
                <input
                    type="number"
                    className="form_input"
                    name="num_guests"
                    placeholder="1"
                    min="1"
                    max="10"
                    value={numGuest}
                    onChange={(e) => {
                    setNumGuest(e.target.value);
                    }}
                    required
                />
                <label htmlFor="occasion">Occasion:</label>
                <select
                    className="form_input"
                    name="occasion"
                    id="occasion"
                    value={occasion}
                    onChange={(e) => {
                    setOccasion(e.target.value);
                    }}
                    required
                >
                    <option value="other">Other</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="birthday">Birthday</option>
                </select>

                <input type="submit" className="form_submit" value="Reserve" />
            </form>
        </div>
    </>
  )
}

export default BookingForm