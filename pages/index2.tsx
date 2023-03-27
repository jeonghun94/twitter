export default function Home() {
  return (
    <div className="flex min-h-screen w-full gap-10 bg-red-100 p-10 py-52">
      <div className="h-full w-full border bg-white px-5 py-5">
        <h1 className="mb-5 text-2xl font-bold">Weater</h1>
        <div className="mb-4 flex h-full w-full items-center justify-between gap-3 rounded border border-b-2 border-black py-3 px-4">
          <div>
            <p className="font-bold">Casius</p>
            <p className="text-xs">Mars, 12AM</p>
          </div>
          <div>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </div>
          <div className="text-2xl font-bold">85°</div>
        </div>
        <div className="mb-4 flex h-full w-full items-center justify-between gap-3 rounded border border-b-2 border-black bg-yellow-400 py-3 px-4">
          <div>
            <p className="font-bold">Dlacria</p>
            <p className="text-xs">Mars, 12AM</p>
          </div>
          <div>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </div>
          <div className="text-2xl font-bold">85°</div>
        </div>
        <div className="mb-4 flex h-full w-full items-center justify-between gap-3 rounded border border-b-2 border-black bg-green-500 py-3 px-4">
          <div>
            <p className="font-bold">New York</p>
            <p className="text-xs">USA, 12AM</p>
          </div>
          <div>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </div>
          <div className="text-2xl font-bold">85°</div>
        </div>
        <div className="mb-4 flex h-full w-full items-center justify-between gap-3 rounded border border-b-2 border-black bg-red-500 py-3 px-4 text-white">
          <div>
            <p className="font-bold">Zomato</p>
            <p className="text-xs">India, 12AM</p>
          </div>
          <div>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          </div>
          <div className="text-2xl font-bold">85°</div>
        </div>
        <div className="flex justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-lg">
            +
          </div>
        </div>
      </div>
      <div className="h-full w-full border bg-white p-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-b-2 border-black text-sm">
          X
        </div>
        <div className="my-5 flex justify-center text-xs font-bold">
          SIMPLE TAG
        </div>
        <div className="text-center text-2xl font-bold">
          Work with best designers
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <div className="flex h-24 w-full items-center justify-center rounded-md border border-black bg-yellow-400 text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div className="flex h-24 w-full items-center justify-center rounded-md border border-black bg-green-400 text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div className="flex h-24 w-full items-center justify-center rounded-md border border-black bg-pink-400 text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div className="flex h-24 w-full items-center justify-center rounded-md border border-black bg-red-400 text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="my-5 w-full rounded-md border border-white bg-blue-700 py-1 text-center text-white">
          Let' get it done
        </div>
      </div>
      <div className="h-full w-full border bg-yellow-500 p-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-b-2 border-black bg-white text-sm">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold">Friends</h1>
          </div>
          <div></div>
        </div>
        <div className="my-5">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search with love..."
              className="w-full rounded-bl-md rounded-tl-md border border-b-4 border-r-0 border-black px-3 py-1"
            />
            <div className="text-md rounded-tr-md rounded-br-md border border-b-4 border-l-0 border-black bg-white px-3 py-1">
              <svg
                className="h-6 w-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="my-3 flex h-full w-full items-center justify-around rounded-md border border-black bg-white py-2 px-1">
            <div className="h-8 w-8 rounded-full bg-red-500"></div>
            <div>
              <p className="font-bold">Bill Rizer</p>
              <p className="text-[1px]">Planet Desiginer</p>
            </div>
            <div className="rounded-lg border border-b-2 border-black bg-yellow-500 p-1 px-2 text-[3px]">
              Invite
            </div>
          </div>
          <div className="my-3 flex h-full w-full items-center justify-around rounded-md border border-black bg-white py-2 px-1">
            <div className="h-8 w-8 rounded-full bg-green-500"></div>
            <div>
              <p className="font-bold">Genbei Yagy</p>
              <p className="text-[1px]">Planet Desiginer</p>
            </div>
            <div className="rounded-lg border border-b-2 border-black bg-yellow-500 p-1 px-2 text-[3px]">
              Invite
            </div>
          </div>
          <div className="my-3 flex h-full w-full items-center justify-around rounded-md border border-black bg-white py-2 px-1">
            <div className="h-8 w-8 rounded-full bg-red-500"></div>
            <div>
              <p className="font-bold">Lancy Neo</p>
              <p className="text-[1px]">Rogue Corp</p>
            </div>
            <div className="rounded-lg border border-b-2 border-black bg-black p-1 px-2 text-[3px] text-white">
              Invited
            </div>
          </div>
          <div className="my-3 flex h-full w-full items-center justify-around rounded-md border border-black bg-white py-2 px-1">
            <div className="h-8 w-8 rounded-full bg-yellow-500"></div>
            <div>
              <p className="font-bold">Bill Rizer</p>
              <p className="text-[1px]">Hard Cops</p>
            </div>
            <div className="rounded-lg border border-b-2 border-black bg-yellow-500 p-1 px-2 text-[3px]">
              Invite
            </div>
          </div>
          <div className="my-3 flex h-full w-full items-center justify-around rounded-md border border-black bg-white py-2 px-1">
            <div className="h-8 w-8 rounded-full bg-pink-500"></div>
            <div>
              <p className="font-bold">Konami</p>
              <p className="text-[1px]">Xenon Creator</p>
            </div>
            <div className="rounded-lg border border-b-2 border-black bg-yellow-500 p-1 px-2 text-[3px]">
              Invite
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
