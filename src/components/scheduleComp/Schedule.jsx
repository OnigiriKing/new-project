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
        <div class="flex flex-col gap-[.5rem]">
          {Object.entries(scheduleList[day]).map(([key, data]) => (
            <div key={key} class="flex bg-gray-200 justify-evenly">
              <h3>{data.name}</h3>
              <p>Time: {data.time}</p>
              <p>Trainer: {data.trainer}</p>
              <button></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
