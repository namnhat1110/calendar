import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./Helpers/util";
import CalendarHeader from "./Components/CalendarHeader";
import Sidebar from "./Components/Sidebar";
import Month from "./Components/Month";
import GlobalContext from "./Context/GlobalContext";
import EventModal from "./Components/EventModal";
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
