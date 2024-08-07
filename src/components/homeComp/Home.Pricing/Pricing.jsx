import redBrush from "../img/redBrush.png";

export default function Pricing() {
  return (
    <div class="flex justify-center items-center my-6">
      <div class="flex common-wrapper gap-8 py-14 relative">
        <div>
          <div class="mb-4 mt-[5rem] relative w-[13rem] flex flex-col items-center">
            <p class="z-[6] font-bold text-white">PRICING</p>
            <img
              class="absolute -top-[1rem]  z-[5] "
              alt="img"
               src={redBrush}
            />
          </div>
          <h3>Pricing Plan</h3>
          <p>
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}
