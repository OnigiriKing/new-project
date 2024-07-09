import TopComp from "components/topComp/TopComp";
import React from "react";
import scheduleList from "utils/data/chedule";

export default function Schedule() {
  const [day, setDay] = React.useState("Monday");

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Schedule" />
      <div class="common-wrapper pt-[4rem]">
        <div class="flex gap-[2rem] justify-center">
          {daysOfWeek.map((date) => {
            return (
              <div
                class={
                  date === day ? "button-class-day-active" : "button-class-day"
                }
                onClick={() => {
                  setDay(date);
                }}
              >
                {date}
              </div>
            );
          })}
        </div>
        <div class="flex flex-col gap-[.5rem] mt-[2rem]">
          {Object.entries(scheduleList[day]).map(([key, data]) => (
            <div key={key} class="bg-gray-200">
              <div class="flex justify-evenly w-full py-[1.7rem]">
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
                <button class="button-class-schedule">Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
