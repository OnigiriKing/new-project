import TopComp from "components/topComp/TopComp";
import React from "react";
import Links from "components/shared/Links";

export default function ContactComp() {
  return (
    <div class="w-full flex flex-col items-center">
      <TopComp des="Contact Us" />
      <div class="common-wrapper pt-[4rem]">
        <div class="flex justify-center mb-[6rem]">
          <div class="w-[50%]">
            <div>
              <h3></h3>
              <p></p>
            </div>
            <div class="grid gap-5 grid-cols-2">
              {/* 1 */}
              <div>
                <h4>Bangkok, Thailand</h4>
                <div>
                  <p>100 N Sathon Rd, Khwaeng Silom, Bang Rak, Bangkok 10500</p>
                </div>
              </div>
              {/* 2 */}
              <div>
                <h4>Opening Hours</h4>
                <div>
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                </div>
              </div>
              {/* 3 */}
              <div>
                <h4>Information</h4>
                <div>
                  <p>+66-000-000</p>
                  <p>bbkgym@gmail.com</p>
                </div>
              </div>
              {/* 4 */}
              <div>
                <h4>Follow Us On</h4>
                <div>
                  <Links />
                </div>
              </div>
            </div>
          </div>
          <div class="w-[50%] bg-slate-600">
            <form>
              <h3></h3>
              <input></input>
              <input></input>
              <text></text>
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
