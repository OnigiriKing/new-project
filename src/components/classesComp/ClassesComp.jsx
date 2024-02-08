import TopComp from "components/topComp/TopComp";
import React from "react";
import allSvg from "svg/allSvg";

export default function ClassesComp() {
  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Classes" />
      <div class="common-wrapper pt-[4rem]">
        <div class="">
          <div class=" flex bg-black text-white w-[20rem] h-[30rem] items-end z-10 relative rounded-3xl">
            <img></img>
            <div class="flex flex-col p-[2rem] justify-end gap-[1rem]">
              <h3>Cycling</h3>
              <div class="flex gap-[1rem]">
                <p>Dorian Yate</p>
                <p>Wed: 9:00 am</p>
              </div>
              <button class="button-class-light mt-[.5rem]">
                JOIN NOW {allSvg(20).arrow}
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button class="button-class">SHOW MORE</button>
        </div>
      </div>
    </div>
  );
}
