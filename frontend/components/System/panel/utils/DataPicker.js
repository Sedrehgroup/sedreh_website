import { setCookie } from "cookies-next";
import moment from "moment-jalaali";
import React, { useState } from "react";
import DatePicker from "react-datepicker2";

export default function DataPicker() {
  const [startDate, setStartDate] = useState(new Date("2022/10/18"));
  const [endDate, setEndDate] = useState(new Date("2022/11/01"));

  setCookie("start", startDate.toISOString().split("T")[0], {
    sameSite: "none",
    secure: true,
  });
  setCookie("end", endDate.toISOString().split("T")[0], {
    sameSite: "none",
    secure: true,
  });
  return (
    <div className="data-picker">
      <div className="mb-2 flex">
        <p className="text-Seventy flex justify-center items-center mb-2 ml-4 w-1/2">
          مبدا زمانی
        </p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          // defaultValue
          value={moment("2022/10/18")}
          className="bg-black1-rgba rounded-lg px-2 py-1"
          placeholder="افزودن تاریخ"
          persianDigits={true}
          isGregorian={false}
          showTodayButton={true}
          timePicker={true}
          inputJalaaliFormat="jYYYY/jM/jD"
        />
      </div>
      <div className="flex">
        <p className="text-Seventy flex justify-center items-center mb-2 ml-4 w-1/2">
          مقصد زمانی
        </p>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          value={moment("2022/11/01")}
          className="bg-black1-rgba rounded-lg px-2 py-1"
          placeholder="افزودن تاریخ"
          persianDigits={true}
          isGregorian={false}
          showTodayButton={true}
          timePicker={true}
          inputJalaaliFormat="jYYYY/jM/jD"
        />
      </div>
    </div>
  );
}
