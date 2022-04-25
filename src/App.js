import "./App.css";

import { RESOURCES } from "./Assets/Resources";
import NavBar from "./Components/NavBar";

import { styled, alpha } from "@mui/material/styles";

import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ViewState } from "@devexpress/dx-react-scheduler";
import { Scheduler, WeekView, Appointments, AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = "2022-04-07";
const schedulerData = [
  { startDate: "2022-04-07T09:45", endDate: "2022-04-07T11:00", title: "Andrew" },
  { startDate: "2022-04-07T12:00", endDate: "2022-04-07T13:30", title: "Andrew, Maryam" },
  { startDate: "2022-04-08T12:00", endDate: "2022-04-08T13:30", title: "Andrew, Maryam" },
  { startDate: "2022-04-08T15:00", endDate: "2022-04-08T16:30", title: "Maryam" },
];
function App() {
  return (
    <div className="App">
      {/* Body Background Color */}
      {/* <Helmet>
        <style>{`body { background-color: ${RESOURCES.THEME.BLACK}; }`}</style>
      </Helmet> */}

      <BrowserRouter>
        {/* Navigation Bar */}
        <NavBar />

        {/* Pages */}
        {/* <Route path="/" element={<HomePage />} /> */}
      </BrowserRouter>
      <div>
        <Scheduler data={schedulerData}>
          <ViewState currentDate={currentDate} />
          <WeekView startDayHour={7} endDayHour={24} excludedDays={[0, 6]} cellDuration={60} />
          <Appointments />
          <AppointmentTooltip />
        </Scheduler>
      </div>
    </div>
  );
}

export default App;
