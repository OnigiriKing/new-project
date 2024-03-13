import TopComp from "components/topComp/TopComp";
import React from "react";
import Links from "components/shared/Links";
import classesList from "utils/data/classes";

export default function ContactComp() {
  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Contact Us" />
      <div class="common-wrapper pt-[4rem]">
        <div class="flex justify-center mb-[6rem]">
          <div class="w-[50%]">
            <div>
              <h3 class="mb-[2rem] font-bold text-3xl">
                We're here to assist you in sculpting your body!
              </h3>
              <p class="mb-[2rem] contact-page-text">
                At BBKgym, we're committed to guiding you towards your ideal
                physique. Our team of seasoned trainers and nutritionists will
                collaborate closely with you to devise a customized fitness and
                nutrition strategy tailored to your unique objectives.
              </p>
            </div>
            <div class="grid gap-5 grid-cols-2">
              {/* 1 */}
              <div>
                <h4 class="contact-page-header text-[1.3rem]">
                  Bangkok, Thailand
                </h4>
                <div class="contact-page-text">
                  <p>100 N Sathon Rd, Khwaeng Silom, Bang Rak, Bangkok 10500</p>
                </div>
              </div>
              {/* 2 */}
              <div>
                <h4 class="contact-page-header text-[1.3rem]">Opening Hours</h4>
                <div class="contact-page-text">
                  <p>Mon to Fri: 7:30 am — 10:00 pm</p>
                  <p>Sat to Sun: 9:30 am — 11:00 pm</p>
                </div>
              </div>
              {/* 3 */}
              <div>
                <h4 class="contact-page-header text-[1.3rem]">Information</h4>
                <div class="contact-page-text">
                  <p>+66-000-000</p>
                  <p>bbkgym@gmail.com</p>
                </div>
              </div>
              {/* 4 */}
              <div>
                <h4 class="contact-page-header text-[1.3rem]">Follow Us On</h4>
                <div>
                  <Links />
                </div>
              </div>
            </div>
          </div>
          <div class="w-[50%] bg-gray-100">
            <form class="flex flex-col p-[2rem] gap-[1rem]">
              <h3 class="contact-page-header text-[1.4rem]">
                Provide Us With Your Details
              </h3>
              <input placeholder="Full Name*" class="input-style"></input>
              <input placeholder="Email Address*" class="input-style"></input>
              <select class="input-style h-[3rem] w-full">
                <option>Select Class</option>
                {Object.keys(classesList).map((el) => {
                  const element = classesList[el];

                  return <option>{element.name}</option>;
                })}
              </select>
              <textarea
                placeholder="Comment"
                class="h-[8rem] p-[1rem] border-gray-200 border-[1px]"
              ></textarea>
              <buttom class="button-class cursor-pointer self-center">
                SUBMIT NOW
              </buttom>
            </form>
          </div>
        </div>
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
