import React from "react";
// import * as React from 'react';

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";



const Calender = () => {
//   const [value, setValue] = React.useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)

  return (
    <div>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            value={value}
             defaultValue={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider> */}
      {/* <input type="date"></input> */}

        <div className="" style={{width:"200px"}}>
      <DatePicker
                className="to form-control"
                selected={startDate}
                value={startDate}
                
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                placeholderText="Date"
                // maxDate={addMonths(new Date(), 5)}
                showDisabledMonthNavigation
              />
    

    </div>
    </div>
  );
};

export default Calender;
