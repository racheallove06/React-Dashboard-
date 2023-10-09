import React, { useState } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
const Calender = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-[#d9f2ff] dark:bg-[#33373E] rounded-3xl  ">
      {" "}
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          selectedDate={new Date(2021, 0, 10)}
        />
      </ScheduleComponent>{" "}
    </div>
  );
};

export default Calender;
