import { logDOM } from "@testing-library/react";
import React from "react";

function Header(props) {
    const [Time, setTime]= React.useState("00:00 am");
    const timeBuilder = (t)=>{
        let hour = t.getHours();
        let min = t.getMinutes() < '10' ? `0${t.getMinutes()}`: t.getMinutes();

       setTime( `${hour}:${min} ${typeof new Date().getHours() > 12 ? 'am' : 'pm'}`);
    }
    setInterval(()=>{
        timeBuilder(new Date())
    },1000)
    const dateBuilder =(d)=>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
    return <div className="header-box">
    <div className="header-time">
        {Time}
    </div>
    <div className="header-day">
{dateBuilder(new Date())}
    </div>
    </div>
}

export default Header;