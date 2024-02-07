import TopComp from "components/topComp/TopComp";
import React from "react";
import allSvg from "svg/allSvg";

export default function ClassesComp() {
  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Classes" />
      <div class="common-wrapper pt-[4rem]">
        <div>
          <div class="bg-black text-white w-[20rem]">
            <img></img>
            <div>
            <h3>Cycling</h3>
            <div>
              <p>Dorian Yate</p>
              <p>Wed: 9:00 am</p>
            </div>
            <button class="button-class-light">
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
