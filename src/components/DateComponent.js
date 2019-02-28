import React from 'react';

const DateComponent = (props) => {


    function range(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }


    const days = ([...Array(32).keys()].map(x => x++));
    days.shift();

    const monthOptions = props.months.map((month, index) => {
        return <option key={index} value={index}>{month}</option>

    });


    const dayOptions = days.map((day, index) => {
        return <option key={index} value ={day}>{day}</option>
    });

    let date = new Date();
    let currentYear = parseInt(date.getFullYear());
    const years = range(1950, currentYear);

    const yearOptions = years.map((year, index) => {
        return <option key={index} value={year}>{year}</option>
    });


    function handleSubmit(event){
        event.preventDefault();
        const personInfo = {
            "month": (parseInt(event.target.months.value, 10) +1),
            "date":event.target.dates.value,
            "year":event.target.years.value
        };

        props.handleDatePost(personInfo);
    }


            return(

                <div>

                    <h1>Select your Birthday to find out which pokemon you are!</h1>


                    <form onSubmit={handleSubmit}>

                        <select name={"months"}>{monthOptions}</select>
                        <select name={"dates"}>{dayOptions} </select>
                        <select name={"years"}>{yearOptions}</select>
                        <br/>
                        <br/>
                        <button type={"submit"}>Which pokemon are you?!</button>

                    </form>


                </div>
        )


};

export default DateComponent;