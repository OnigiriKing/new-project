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
  };

  return svg;
}
