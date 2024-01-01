export default function Calculator() {
  return (
    <div class="flex justify-center items-center  bg-black text-white  my-6">
      <div class="flex flex-col common-wrapper items-center gap-8">
        <div class="flex flex-col">
          <h3>
            Let's Calculate Your <b>BMI</b>
          </h3>
          <p>
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <div>
            <div class="flex gap-4">
              <input placeholder="weight / kg" class="px-4 py-2"></input>
              <input placeholder="Height / sm" class="px-4 py-2"></input>
            </div>
            <div class="flex gap-4">
              <h4>Your BMI is:</h4>
              <h4>Your weight is:</h4>
            </div>
            <button>CALCULATE</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
