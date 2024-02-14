import TopComp from "components/topComp/TopComp";
import React from "react";
import allSvg from "svg/allSvg";
import classesList from "utils/data/classes";

export default function ClassesComp() {
  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Classes" />
      <div class="common-wrapper pt-[4rem]">
        <div class="grid grid-cols-3 gap-[2.5rem] mb-[3rem]">
          {Object.keys(classesList).map((el) => {
            const gymClass = classesList[el];

            return (
              <div class=" flex bg-black text-white w-[20rem] h-[30rem] items-end z-10 relative rounded-3xl overflow-hidden font-bold">
                <img
                  src={gymClass.img}
                  class="absolute object-center object-cover w-full h-full"
                ></img>
                <div class="flex flex-col p-[2rem] justify-end gap-[1rem] z-20">
                  <h3>{gymClass.name}</h3>
                  <div class="flex gap-[1rem]">
                    <p>{gymClass.trainer}</p>
                    <p>{gymClass.time}</p>
                  </div>
                  <button class="button-class-light mt-[.5rem]">
                    JOIN NOW {allSvg(20).arrow}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div class="flex justify-center">
          <button class="button-class">SHOW MORE</button>
        </div>
      </div>
    </div>
  );
}
