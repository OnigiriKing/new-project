import TopComp from "components/topComp/TopComp";
import React from "react";
import allSvg from "svg/allSvg";

export default function ContactComp() {
  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Contact Us" />
      <div class="common-wrapper pt-[4rem]">
        <div class="flex justify-center"></div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.83573355543!2d100.53441865538323!3d13.736063836464625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed8eee66a67%3A0x40100b25de289c0!2sLumphini%2C%20Pathum%20Wan%2C%20Bangkok%2010330!5e0!3m2!1sen!2sth!4v1708193690026!5m2!1sen!2sth"
        height="400"
        style={{ border: 0, width: "100%" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
