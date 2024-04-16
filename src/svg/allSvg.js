export default function allSvg(width) {
  const svg = {
    user: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        class="group-hover:text-red-500 duration-500"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5ZM8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0ZM12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414ZM4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339c-1.974 0-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    about: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        class="group-hover:text-red-500 duration-500"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"
        />
      </svg>
    ),
    add: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        class="text-red-500 duration-500"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M16 2A14.172 14.172 0 0 0 2 16a14.172 14.172 0 0 0 14 14a14.172 14.172 0 0 0 14-14A14.172 14.172 0 0 0 16 2Zm8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"
        />
        <path fill="#fff" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7v2z" />
      </svg>
    ),
    linkedin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39Zm1 7.516V6.234h-2v6.579h2ZM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    twitter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
          <path
            fill="currentColor"
            d="M4.594 4.984a1 1 0 0 1 .941.429C7.011 7.572 8.783 8.47 10.75 8.674c.096-.841.323-1.672.75-2.404c.626-1.074 1.644-1.864 3.098-2.156c2.01-.404 3.54.324 4.427 1.215l1.792-.335a1 1 0 0 1 1.053 1.478l-1.72 3.022c.157 4.361-1.055 7.405-3.639 9.502c-1.37 1.112-3.332 1.743-5.485 1.938c-2.17.196-4.623-.041-7.061-.753a1 1 0 0 1 .007-1.922c1.226-.349 2.16-.65 3.003-1.177c-1.199-.636-2.082-1.468-2.707-2.416c-.868-1.318-1.19-2.788-1.254-4.113c-.064-1.325.127-2.553.329-3.438c.115-.505.249-1.011.434-1.495a1 1 0 0 1 .818-.636Z"
          />
        </g>
      </svg>
    ),
    facebook: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
        />
      </svg>
    ),
    inst: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M13.028 2.001a78.82 78.82 0 0 1 2.189.022l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.154a4.908 4.908 0 0 1 1.153 1.771c.247.637.415 1.364.465 2.428c.012.266.022.488.03.712l.006.194a79 79 0 0 1 .023 2.188l.001.746v1.31a78.836 78.836 0 0 1-.023 2.189l-.006.194c-.008.224-.018.445-.03.712c-.05 1.064-.22 1.79-.466 2.427a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-.267.012-.488.022-.712.03l-.194.006a79 79 0 0 1-2.189.023l-.746.001h-1.309a78.836 78.836 0 0 1-2.189-.023l-.194-.006a60.64 60.64 0 0 1-.712-.03c-1.064-.05-1.79-.22-2.428-.466a4.89 4.89 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.427a74.367 74.367 0 0 1-.03-.712l-.005-.194A79.053 79.053 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.224.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.68a4.897 4.897 0 0 1 1.77-1.155c.638-.247 1.363-.415 2.428-.465l.712-.03l.194-.005A79.053 79.053 0 0 1 10.972 2h2.056Zm-1.028 5A5 5 0 1 0 12 17a5 5 0 0 0 0-10Zm0 2A3 3 0 1 1 12.001 15a3 3 0 0 1 0-6Zm5.25-3.5a1.25 1.25 0 0 0 0 2.498a1.25 1.25 0 0 0 0-2.5Z"
        />
      </svg>
    ),
    pint: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 384 512"
      >
        <path
          fill="currentColor"
          d="M204 6.5C101.4 6.5 0 74.9 0 185.6C0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4c0-9.3-23.7-29.1-23.7-67.8c0-80.4 61.2-137.4 140.4-137.4c68.1 0 118.5 38.7 118.5 109.8c0 53.1-21.3 152.7-90.3 152.7c-24.9 0-46.2-18-46.2-43.8c0-37.8 26.4-74.4 26.4-113.4c0-66.2-93.9-54.2-93.9 25.8c0 16.8 2.1 35.4 9.6 50.7c-13.8 59.4-42 147.9-42 209.1c0 18.9 2.7 37.5 4.5 56.4c3.4 3.8 1.7 3.4 6.9 1.5c50.4-69 48.6-82.5 71.4-172.8c12.3 23.4 44.1 36 69.3 36c106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
        />
      </svg>
    ),
    youTube: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
        />
      </svg>
    ),
    twitter2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
          <path
            fill="currentColor"
            d="M4.594 4.984a1 1 0 0 1 .941.429C7.011 7.572 8.783 8.47 10.75 8.674c.096-.841.323-1.672.75-2.404c.626-1.074 1.644-1.864 3.098-2.156c2.01-.404 3.54.324 4.427 1.215l1.792-.335a1 1 0 0 1 1.053 1.478l-1.72 3.022c.157 4.361-1.055 7.405-3.639 9.502c-1.37 1.112-3.332 1.743-5.485 1.938c-2.17.196-4.623-.041-7.061-.753a1 1 0 0 1 .007-1.922c1.226-.349 2.16-.65 3.003-1.177c-1.199-.636-2.082-1.468-2.707-2.416c-.868-1.318-1.19-2.788-1.254-4.113c-.064-1.325.127-2.553.329-3.438c.115-.505.249-1.011.434-1.495a1 1 0 0 1 .818-.636Z"
          />
        </g>
      </svg>
    ),
    time: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0Zm0 1.395a8.605 8.605 0 1 0 0 17.21a8.605 8.605 0 0 0 0-17.21Zm-.93 4.186c.385 0 .697.313.697.698v4.884h4.884a.698.698 0 0 1 0 1.395H9.07a.698.698 0 0 1-.698-.698V6.28c0-.386.312-.699.698-.699Z"
        />
      </svg>
    ),
    workout: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 48 48"
      >
        <g fill="currentColor">
          <path d="M30.5 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-9.04 4.282c-1.247.31-2.098.776-2.785 1.354c-1.03.868-1.862 2.12-2.986 4.088a2 2 0 1 1-3.473-1.985c1.119-1.957 2.25-3.788 3.883-5.162c1.704-1.436 3.79-2.248 6.603-2.561c1.176-.13 2.47-.104 3.683.437c1.273.569 2.203 1.588 2.837 2.95c.854 1.833 1.489 2.924 1.997 3.557c.245.303.416.444.513.507c.077.05.11.054.122.056h.001c.087.01.369 0 1.197-.367c.361-.16.755-.352 1.237-.587l.115-.056a53.715 53.715 0 0 1 1.784-.84a2 2 0 0 1 1.625 3.655a49.38 49.38 0 0 0-1.653.779l-.131.064c-.461.225-.925.452-1.36.644c-.9.398-2.05.83-3.297.679c-1.316-.16-2.33-.903-3.165-1.9l-2.733 5.273l3.78 4.918c.225.294.364.644.403 1.012l.832 7.996a2 2 0 1 1-3.978.414l-.774-7.433l-2.296-2.988l-.02.037l-.084-.172l-4.242-5.52a2 2 0 0 1-.282-1.934l2.647-6.915Z" />
          <path d="m18.432 29.007l-1.472 3.96l-5.8-.46a2 2 0 1 0-.318 3.987l7.308.58a2 2 0 0 0 2.033-1.296l1.125-3.028l-2.876-3.743Z" />
        </g>
      </svg>
    ),
    list: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 1200 1200"
      >
        <path
          fill="currentColor"
          d="M600 0c-65.168 0-115.356 54.372-115.356 119.385c0 62.619-.439 117.407-.439 117.407h-115.87c-2.181 0-4.291.241-6.372.586h-32.227v112.573h540.527V237.378h-32.227c-2.081-.345-4.191-.586-6.372-.586H715.796s1.318-49.596 1.318-117.041C717.114 57.131 665.168 0 600 0zM175.195 114.185V1200h849.609V114.185H755.64v78.662h191.382v928.345h-693.97V192.847H444.36v-78.662H175.195zM600 115.649c21.35 0 38.599 17.18 38.599 38.452c0 21.311-17.249 38.525-38.599 38.525s-38.599-17.215-38.599-38.525c0-21.271 17.249-38.452 38.599-38.452zM329.736 426.27v38.525h38.599V426.27h-38.599zm115.869.732v38.525h424.658v-38.525H445.605zm-115.869 144.58v38.525h38.599v-38.525h-38.599zm115.869.732v38.599h424.658v-38.599H445.605zM329.736 716.895v38.525h38.599v-38.525h-38.599zm115.869.805v38.525h424.658V717.7H445.605zM329.736 862.28v38.525h38.599V862.28h-38.599zm115.869.806v38.525h424.658v-38.525H445.605zm-115.869 144.507v38.525h38.599v-38.525h-38.599zm115.869.805v38.525h424.658v-38.525H445.605z"
        />
      </svg>
    ),
    lifting: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="m77.492 18.457l-17.726 3.127L69.09 74.47a1630.67 1630.67 0 0 0-15.8 2.54l-6.503-36.89l-17.726 3.124l6.49 36.795a1877.847 1877.847 0 0 0-17.196 3.112l3.292 17.696c5.728-1.066 11.397-2.09 17.028-3.084l7.056 40.02l17.727-3.124l-7.04-39.93c5.304-.88 10.57-1.725 15.798-2.54l9.777 55.45l17.727-3.126l-9.697-54.99a1415.91 1415.91 0 0 1 25.18-3.38c15.54 46.39 34.697 99.995 66.936 134.448C190.86 250.992 192 268 214.56 310C192 348 176 412 167.21 471l-48 6v15H192c16-48 64-144 64-144s48 96 64 144h72.79v-15l-48-6C336 412 320 348 294 310c26-42 24.175-59.585 35.83-89.377c32.25-34.452 51.42-88.075 66.967-134.478c8.314 1.04 16.697 2.16 25.18 3.38l-9.696 54.99l17.728 3.124l9.777-55.45c5.23.815 10.494 1.66 15.8 2.54l-7.042 39.93l17.727 3.125l7.056-40.02c5.63.993 11.3 2.017 17.028 3.083l3.292-17.696c-5.78-1.075-11.507-2.11-17.195-3.113l6.49-36.796l-17.727-3.125l-6.504 36.89a1564.46 1564.46 0 0 0-15.8-2.54l9.324-52.886l-17.726-3.127l-9.406 53.35C365.982 63.31 310.982 59.04 256 59.04c-54.98 0-109.983 4.27-169.102 12.767l-9.406-53.35zM256 76.98c35.53 0 71.07 1.83 107.822 5.463c-14.082 34.858-38.454 73.504-63.203 101.967C290.293 199.27 274.35 209 256 209s-34.294-9.73-44.62-24.59c-24.748-28.463-49.12-67.11-63.202-101.967c36.75-3.633 72.29-5.463 107.822-5.463zM256 97c-20.835 0-39 20.24-39 47s18.165 47 39 47s39-20.24 39-47s-18.165-47-39-47z"
        />
      </svg>
    ),
    weight: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 2048 2048"
      >
        <path
          fill="currentColor"
          d="m1883 640l128 128l-283 282l-320-319l-677 677l319 320l-282 283l-128-128l-160 159l-192-191q-10 9-20 21t-22 22t-25 18t-29 8q-26 0-45-19t-19-45q0-15 7-28t18-25t23-22t21-21L6 1568l159-160l-128-128l283-282l320 319l677-677l-319-320l282-283l128 128L1568 6l192 191q10-9 20-21t22-22t25-18t29-8q26 0 45 19t19 45q0 15-7 28t-18 25t-23 22t-21 21l191 192l-159 160zM549 1792l-293-293l-69 69l293 293l69-69zm321-64l-550-550l-101 102l549 549l102-101zm629-1472l293 293l69-69l-293-293l-69 69zm330 512l-549-549l-102 101l550 550l101-102z"
        />
      </svg>
    ),
    gymBag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M260.7 29.45c-25.7.1-51.1 2.14-73.1 5.22l10.2 37.24c41.9-8.58 85.7-5.82 129.7.1l7.8-35.94c-23-4.82-48.9-6.71-74.6-6.62zm-88.4 16.28c-10.3 2.62-20.4 5.73-30 9.31c-8.2 3.05-13.3 9.6-19.1 18.13c-5.8 8.52-11.8 19.42-17.9 32.03c-12.3 25.2-25.13 57.1-36.88 88.6c-11.33 30.4-21.58 60.2-29.21 83c6.07-4.8 13.57-7.9 21.58-7.7c6.93-20.4 15.35-44.5 24.5-69c11.63-31.2 24.41-62.8 36.21-87c5.9-12.2 11.6-22.51 16.6-29.78c5-7.31 9.9-11.22 10.4-11.42c9.1-3.37 18.6-6.27 28.4-8.72zm178.2 5.23l-3.9 17.83c11.3 3.98 22 8.81 32 14.49c2.9 1.62 8.5 7.61 14.2 17.02c5.6 9.4 11.7 21.9 17.7 36.4c12.2 28.9 24.4 65.6 35.3 101.5c3.1 10.4 6.2 20.7 9.1 30.7c7.3 1 14.1 4.5 19.5 9.5c.9.8 1.7 1.6 2.5 2.5c-4.3-15.3-8.9-31.5-13.9-47.9c-10.9-36.3-23.3-73.4-35.9-103.3c-6.2-15-12.6-28.1-18.9-38.71c-6.4-10.56-12.5-18.67-20.6-23.33c-11.7-6.64-24.1-12.18-37.1-16.7zM318.3 206.6L192 207.7l-.5.1c-30.3 3.2-53.4 30.5-57.7 66c6.1.3 12.1.6 18 .8c3.8-27.8 21.4-46.7 41.5-48.9l123.3-1.1c15.6 2.6 32.3 18.6 36.6 48.9c5.9-.3 11.9-.5 18-.8c-4.9-37.5-26.5-62-52.2-66zm131.9 80.1c-26.5 1.4-51.7 2.8-76 3.9c15.8 61 15.1 122.6 15 183.2c29.1-2.8 59-6.1 90-9.8c.6-.1 2.2-.7 4.5-5.1c2.3-4.3 4.5-11.4 5.9-20.2c2.9-17.6 3.2-41.5.7-65.2c-2.6-23.6-8.1-47-15.7-63.4c-3.8-8.2-8.1-14.6-12.3-18.4c-4.3-3.8-7.9-5.2-12.1-5zm-390.9.4c-3.41.1-6.38 1.5-9.92 4.8c-4.05 3.7-8.29 10.1-11.99 18.3c-7.39 16.5-12.67 40.2-15.3 64.2c-2.63 24-2.67 48.4-.36 66.5c1.15 9 2.95 16.5 4.88 21c1.94 4.6 3.57 4.9 2.41 4.7c30.37 5.1 59.95 8.8 89.18 11.4c-5.6-58.2-3.5-119.8 11.9-186.4c-22.1-1-45.11-2.5-69.3-4.4c-.51 0-1.01-.1-1.5-.1zm296.5 4.3c-70.4 3-134.8 4.1-207.5 1.1c-15.9 67-17.9 128.3-11.9 187c77.8 5.6 153.6 3.1 234.8-4.1c.1-62.6.8-124.4-15.4-184z"
        />
      </svg>
    ),
    arrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <g transform="rotate(90 12 12)">
          <g fill="none">
            <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
            <path
              fill="currentColor"
              d="M13.06 3.283a1.5 1.5 0 0 0-2.12 0L5.281 8.939a1.5 1.5 0 0 0 2.122 2.122L10.5 7.965V19.5a1.5 1.5 0 0 0 3 0V7.965l3.096 3.096a1.5 1.5 0 1 0 2.122-2.122L13.06 3.283Z"
            />
          </g>
        </g>
      </svg>
    ),
    arrowSmall: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 1024 1024"
      >
        <path
          fill="currentColor"
          d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496"
        />
      </svg>
    ),
    yoga: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m12 11l-1 3l1 3h-1.5L9 14l.5-4.5L12 11Zm1-9L9 6v8l1 3H6l-3 5m17.5 0l-5-3.5L12 17l-1-3l1-3l3.5 2v5.5M14 8.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-3 2L10 17v-3.5l1-3Z"
        />
      </svg>
    ),
    boxing: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m19.8 2l-8.2 6.7l-1.21-1.04L14 5.58L9.41 1L8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17L8 16l-2.03-3.5l.35-1.32L9.5 13l.5 9h2l.5-10L21 3.4L19.8 2M5 3a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2Z"
        />
      </svg>
    ),
    cardio: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m10.7 12.725l-.85-1.275q-.125-.2-.35-.325T9.025 11h-6.55Q2.2 10.35 2.1 9.75T2 8.5q0-2.35 1.575-3.925T7.5 3q1.3 0 2.475.55T12 5.1q.85-1 2.025-1.55T16.5 3q2.35 0 3.925 1.575T22 8.5q0 .65-.1 1.25T21.525 11h-5.95L13.85 8.45q-.15-.225-.387-.337T12.95 8q-.325 0-.562.188t-.338.487l-1.35 4.05ZM12 21.35l-1.45-1.3q-2.625-2.35-4.3-4.025T3.625 13h4.8l1.725 2.55q.15.225.388.338t.512.112q.325 0 .563-.187t.337-.488l1.35-4.075l.875 1.3q.125.2.35.325T15 13h5.375q-.95 1.35-2.625 3.025t-4.3 4.025L12 21.35Z"
        />
      </svg>
    ),
    power: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22l1.43-1.43L16.29 22l2.14-2.14l1.43 1.43l1.43-1.43l-1.43-1.43L22 16.29l-1.43-1.43Z"
        />
      </svg>
    ),
    cycling: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11 15.414V20h2v-4.586c0-.526-.214-1.042-.586-1.414l-2-2L13 9.414l2 2c.372.372.888.586 1.414.586H20v-2h-3.586l-3.707-3.707a.999.999 0 0 0-1.414 0L8 9.586c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414l3 3z"
        />
        <circle cx="16" cy="5" r="2" fill="currentColor" />
        <path
          fill="currentColor"
          d="M18 14c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2zM6 22c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2z"
        />
      </svg>
    ),
    bottle: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7.5 21.115q-.666 0-1.14-.474q-.475-.475-.475-1.141v-1.77q0-.666.474-1.14q.475-.475 1.141-.475h.385v-5.23H7.5q-.666 0-1.14-.475q-.475-.474-.475-1.14V7.5q0-.666.474-1.14q.475-.475 1.141-.475h3.192V4.5h-.5q-.212 0-.356-.144t-.144-.357q0-.212.144-.356q.144-.143.356-.143h3.616q.212 0 .356.144t.144.357q0 .212-.144.356q-.144.143-.356.143h-.5v1.385H16.5q.666 0 1.14.474q.475.475.475 1.141v1.77q0 .666-.474 1.14q-.475.475-1.141.475h-.385v5.23h.385q.666 0 1.14.475q.475.474.475 1.14v1.77q0 .666-.474 1.14q-.475.475-1.141.475z"
        />
      </svg>
    ),
    bacycle: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 48 48"
      >
        <g fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M35.4 36.2a1 1 0 0 1 1.4.2l2.7 3.6H41a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2h1l-1.8-2.4a1 1 0 0 1 .2-1.4"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M33 38a9 9 0 1 0-7.485-14h7.062a5.423 5.423 0 0 1 1.43 10.655l-6.202 1.695A8.959 8.959 0 0 0 33 38m-6.924-3.25l7.403-2.025A3.423 3.423 0 0 0 32.577 26h-8.065A8.985 8.985 0 0 0 24 29c0 2.186.78 4.19 2.076 5.75"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M30.569 37.668a8.964 8.964 0 0 1-2.764-1.318l6.202-1.695A5.423 5.423 0 0 0 32.577 24h-7.062a9.05 9.05 0 0 1 1.827-2a9 9 0 1 1 3.227 15.668m9.428-8.46a7 7 0 0 0-7.207-7.206a7.424 7.424 0 0 1 7.207 7.207M26.076 34.75l7.403-2.024A3.423 3.423 0 0 0 32.577 26h-8.065A8.985 8.985 0 0 0 24 29c0 2.186.78 4.19 2.076 5.75M26.07 28c-.047.326-.071.66-.071 1c0 1.256.33 2.431.907 3.449l6.045-1.653A1.423 1.423 0 0 0 32.577 28zM13.6 36.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 1 1-1.6-1.2l3-4a1 1 0 0 1 1.4-.2"
            clip-rule="evenodd"
          />
          <path d="M7 41a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" />
          <path
            fill-rule="evenodd"
            d="M8 40a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm0-7.98A6.02 6.02 0 0 1 14.02 26h18.56a3.42 3.42 0 0 1 .94 6.709l-17.847 5.099C11.828 38.906 8 36.018 8 32.02m7.732.98A2 2 0 0 1 12 32a2 2 0 0 1 3.732-1H19a1 1 0 1 1 0 2z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M10 32.01v.01c0 2.67 2.556 4.598 5.124 3.865L18.22 35h-1.575A4 4 0 0 1 10 32.01M14.01 28h18.57a1.42 1.42 0 0 1 .39 2.786l-11.922 3.406A3 3 0 0 0 19 29h-2.355a3.986 3.986 0 0 0-2.635-1m1.722 5A2 2 0 0 1 12 32a2 2 0 0 1 3.732-1H19a1 1 0 1 1 0 2zm-1.712-7A6.02 6.02 0 0 0 8 32.02c0 3.999 3.828 6.886 7.673 5.788l17.846-5.1A3.42 3.42 0 0 0 32.58 26z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M10.702 18.046a1 1 0 0 1 1.252.656l2.5 8a1 1 0 0 1-1.908.596l-2.5-8a1 1 0 0 1 .656-1.252M35.343 6.06a1 1 0 0 1 .596 1.283l-1 2.738a1 1 0 0 1-.574.588l-3.588 1.405l3.161 8.58a1 1 0 1 1-1.876.692l-3.5-9.5a1 1 0 0 1 .573-1.277l4.08-1.598l.846-2.314a1 1 0 0 1 1.282-.596"
            clip-rule="evenodd"
          />
          <path d="M6 17.15a2.85 2.85 0 0 1 3.134-2.837l4.502.45a2.625 2.625 0 0 1-.26 5.237H8.85A2.85 2.85 0 0 1 6 17.15" />
          <path
            fill-rule="evenodd"
            d="m13.438 16.754l-4.503-.45A.85.85 0 1 0 8.85 18h4.525a.625.625 0 0 0 .063-1.246m-4.304-2.44A2.85 2.85 0 1 0 8.85 20h4.525a2.625 2.625 0 0 0 .261-5.236z"
            clip-rule="evenodd"
          />
        </g>
      </svg>
    ),
    muscle: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
          <path
            fill="currentColor"
            d="M13.362 3.536c.484.093 1.191.335 1.532 1.017c.747 1.494.13 2.914-.532 3.797c-.432.576-.988 1.118-1.635 1.45c-.135.07-.41.2-.727.2c-.591 0-1.17-.269-1.645-.605c-.09.306-.177.642-.252.998a10.597 10.597 0 0 0-.24 2.078c1.053-.34 2.13-.304 3.058.22a6.467 6.467 0 0 1 2.357-1.173c1.3-.341 2.86-.294 4.277.65c1.015.677 1.784 1.952 1.939 3.347c.162 1.454-.343 3.044-1.87 4.266c-1.078.862-2.721 1.195-4.233 1.316c-1.565.126-3.218.04-4.501-.103c-2.378-.264-4.204-.928-5.48-1.613c-.837-.45-1.982-1.072-2.345-2.025c-.245-.646-.181-1.43-.121-2.102c.08-.881.276-1.981.643-3.173c.732-2.379 2.165-5.194 4.776-7.352c.803-.664 2.147-1.076 3.272-1.214c.58-.071 1.19-.081 1.727.021"
          />
        </g>
      </svg>
    ),
    quotes: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"
        />
      </svg>
    ),
    goal: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="m13.637 2.363l1.676.335c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.373 1.374a.876.876 0 0 1-.619.256H12.31L9.45 7.611A1.5 1.5 0 1 1 6.5 8a1.501 1.501 0 0 1 1.889-1.449l2.861-2.862V2.552c0-.232.092-.455.256-.619L12.88.559a.25.25 0 0 1 .249-.062c.089.026.155.1.173.19Z"
        />
        <path
          fill="currentColor"
          d="M2 8a6 6 0 1 0 11.769-1.656a.751.751 0 1 1 1.442-.413a7.502 7.502 0 0 1-12.513 7.371A7.501 7.501 0 0 1 10.069.789a.75.75 0 0 1-.413 1.442A6.001 6.001 0 0 0 2 8"
        />
        <path
          fill="currentColor"
          d="M5 8a3.002 3.002 0 0 0 4.699 2.476a3 3 0 0 0 1.28-2.827a.748.748 0 0 1 1.045-.782a.75.75 0 0 1 .445.61A4.5 4.5 0 1 1 8.516 3.53a.75.75 0 1 1-.17 1.49A3 3 0 0 0 5 8"
        />
      </svg>
    ),
    achievement: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="m305.975 298.814l22.704 2.383V486l-62.712-66.965V312.499l18.214 8.895zm-99.95 0l-22.716 2.383V486l62.711-66.965V312.499l-18.213 8.895zm171.98-115.78l7.347 25.574l-22.055 14.87l-1.847 26.571l-25.81 6.425l-10.803 24.314l-26.46-2.795l-18.475 19.087L256 285.403l-23.902 11.677l-18.475-19.15l-26.46 2.795l-10.803-24.313l-25.81-6.363l-1.847-26.534l-22.118-14.92l7.348-25.573l-15.594-21.544l15.644-21.52l-7.398-25.523l22.068-14.87L150.5 73.03l25.86-6.362l10.803-24.313l26.46 2.794L232.098 26L256 37.677L279.902 26l18.475 19.149l26.46-2.794l10.803 24.313l25.81 6.425l1.847 26.534l22.055 14.87l-7.347 25.574l15.656 21.407zm-49.214-21.556a72.242 72.242 0 1 0-72.242 72.242a72.355 72.355 0 0 0 72.242-72.242m-72.242-52.283a52.282 52.282 0 1 0 52.282 52.283a52.395 52.395 0 0 0-52.282-52.245z"
        />
      </svg>
    ),
    serach: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
        />
      </svg>
    ),
    post: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z"
        />
      </svg>
    ),
    close: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
        />
      </svg>
    ),
    userIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
        />
      </svg>
    ),
    changeIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <path d="M3.53 11.47v2.118a4.235 4.235 0 0 0 4.235 4.236H20.47M3.53 6.176h12.705a4.235 4.235 0 0 1 4.236 4.236v2.117" />
          <path d="m17.294 14.647l3.177 3.176L17.294 21M6.706 9.353L3.529 6.176L6.706 3" />
        </g>
      </svg>
    ),
  };

  return svg;
}
