import TopComp from "components/topComp/TopComp";
import allSvg from "svg/allSvg";
import redBrush from "utils/img/redBrush.png";
import run from "utils/img/run.png";
import { Link } from "react-router-dom";
import ach from "utils/img/aboutImg/ach.png"
import goal from "utils/img/aboutImg/goal.png";

export default function About() {
  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="About" />
      <div class="common-wrapper pt-[4rem]">
        <div class="flex mx-[2rem]">
          <div class="flex gap-6 flex-col z-10">
            <div class="relative">
              <h3 class="text-white relative z-[10] font-bold ">WHO WE ARE</h3>
              <img
                class="absolute w-[12rem] -top-[.9rem] -left-[2.3rem] z-[5]"
                src={redBrush}
              />
            </div>
            <h3 class="text-3xl font-bold">
              Take Your Health And Body To Next Level
            </h3>
            <p class="text-gray-500">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <Link class="button-class">TAKE A TOUR {allSvg(20).arrow}</Link>
          </div>
          <div class="w-[60rem] flex items-center">
            <img src={run} />
          </div>
        </div>
        <div>
          {/* first */}
          <div class="flex ">
            <div class="w-[50%] flex flex-col gap-[1rem] items-center text-center">
              <div>{allSvg(20).goal}</div>
              <h3 class="text-3xl">Our Goal</h3>
              <p class="text-gray-500">
                Elevating your health and happiness. We strive to help you
                achieve a stronger body and a more fulfilling life.
              </p>
            </div>
            <div class="w-[50%]">
              <img class="h-[25rem]" src={goal}></img>
            </div>
          </div>
          {/* second */}
          <div class="flex flex-row-reverse">
            <div>
              <div>{allSvg(20).achievement}</div>
              <h3>Our Achievements</h3>
              <p>
                Celebrating numerous fitness milestones and transformative
                wellness journeys, we stand as a testament to strength, health,
                and community success.
              </p>
            </div>
            <div>
              <img src={ach}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
