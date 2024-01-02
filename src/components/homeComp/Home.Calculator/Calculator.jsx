export default function Calculator() {
  return (
    <div class="flex justify-center items-center  bg-black text-white  my-6">
      <div class="flex flex-col common-wrapper gap-8 py-14">
        <div class="flex flex-col gap-4">
          <h3 class="text-3xl">
            Let's Calculate Your <b class="text-red-600">BMI</b>
          </h3>
          <p>
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <div class="flex flex-col gap-4">
            <div class="flex gap-4">
              <input placeholder="weight / kg" class="px-4 py-2"></input>
              <input placeholder="Height / sm" class="px-4 py-2"></input>
            </div>
            <div class="flex gap-4">
              <h4>Your BMI is:</h4>
              <h4>Your weight is:</h4>
            </div>
            <button class="w-fit">CALCULATE</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
