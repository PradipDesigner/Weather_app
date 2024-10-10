import React, { useEffect, useState } from "react";

const Clock = ({localTime}) => {
  const [weekday, setWeekDay] = useState("");
  const [localDate, setLocalDate] = useState("");
  const [time, setTime] = useState("");

  // useEffect(() => {
  //   const updateDateTime = ()=>{
  //     const date = new Date(); //
  //     const weekOfDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];   // week days array
  //     const dayName = weekOfDays[date.getDay()]   // get current days name
  //     const getDate = date.toLocaleDateString()
  //     const getLocalTime = date.toLocaleTimeString()
  
  //     setWeekDay(dayName) //set day name
  //     setLocalDate(getDate) //set local date
  //     setTime(getLocalTime)

      
  //   }
  //   // Update the time every second
  //   const intervalId = setInterval(updateDateTime, 1000);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <>
      <div className="d-flex justify-content-between gap-3 mt-2 clock fw-bold">
        {/* <div className="">{weekday},{localDate} </div> */}
        <h5>{localTime}</h5>
        {/* <div>{time}</div> */}
      </div>
    </>
  );
};

export default Clock;
