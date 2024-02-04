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
            <div key={key} class="bg-gray-200">
              <div class="flex justify-evenly w-full py-[1.8rem]">
                <div class="text-center">
                  <p class="text-gray-500">Name</p>
                  <p class="font-bold">{data.name}</p>
                </div>
                <div class="text-center">
                  <p class="text-gray-500">Time</p>
                  <p class="font-bold">{data.time}</p>
                </div>
                <div class="text-center">
                  <p class="text-gray-500">Trainer</p>
                  <p class="font-bold">{data.trainer}</p>
                </div>
                <button>Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
