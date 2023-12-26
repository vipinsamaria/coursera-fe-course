import React, { useReducer }from 'react'
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm/BookingForm'
import Subheader from '../components/Subheader/Subheader'


const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

const updateTimes = (availableTimes, action) => {
    if (action.type === "add") return (
        fetchAPI(new Date(action.date))
    )
};

const d = new Date();
const initialTime = fetchAPI(d);

const Reservation = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initialTime);

    const navigate = useNavigate();

    function submitForm(data) {
        if(submitAPI(data) === true) navigate('/bookingconfirmed')
            console.log(data);
    }
  return (
    <>
        <BookingForm availableTimes={ availableTimes } dispatch={dispatch} submitForm={submitForm}/>
        <Subheader />
    </>
  )
}

export default Reservation