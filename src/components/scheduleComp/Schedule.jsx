import TopComp from "components/topComp/TopComp";
import React from "react";
import scheduleList from "utils/data/chedule";

export default function Schedule() {
  const [day, setDay] = React.useState("monday");

  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Schedule" />
      <div class="common-wrapper pt-[4rem]">
        <div>
          <div></div>
        </div>
        <div>
          {Object.entries(scheduleList[day]).map(([key, data]) => (
            <div key={key}>
              <h3>{data.name}</h3>
              <p>Time: {data.time}</p>
              <p>Trainer: {data.trainer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
