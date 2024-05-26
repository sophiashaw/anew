import React from 'react';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

import './cal-styles.css';

function Calendar(){
    const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 20);
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 6);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 25);
    return(
        <div>
            <CalendarComponent value = {dateValue}
            min = {startDate}
            max={endDate}
            start = "Decade"
            ></CalendarComponent>
        </div>
    )
}

export default Calendar;
