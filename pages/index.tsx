export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-blue-200">
      <div className="w-full max-w-sm rounded-[3.5rem] bg-white  pb-5 h-auto border-[.8rem] py-2 px-3 border-black flex flex-col">
        <div className="w-2/5 h-8 flex justify-around  place-self-center mt-2 rounded-2xl bg-black p-2 items-center ">
          <div className="w-4 h-4 bg-slate-900 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
        </div>

        <div className="px-2 py-4 w-full border-0 border-b-2 border-b-gray-300 flex items-center justify-start">
          <select className="">
            <option value="">March 2021</option>
          </select>
        </div>

        <div className="w-full p-4  mb-3 flex-col items-center text-center ">
          <h1>Hello, Bruno!</h1>
          <h1>Your medicines for today</h1>
        </div>

        <div className="grid grid-cols-6 pb-16 w-full ">
          <div className="flex flex-col justify-center items-center gap-6 py-1.5">
            <h1 className="text-2xl font-semibold">16</h1>
            <h3 className="text-xs">Mon</h3>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 py-1.5">
            <h1 className="text-2xl font-semibold">17</h1>
            <h3 className="text-xs">Tue</h3>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 py-1.5 bg-blue-300 rounded-2xl">
            <h1 className="text-2xl font-semibold">18</h1>
            <h3 className="text-xs">Wed</h3>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 py-1.5">
            <h1 className="text-2xl font-semibold">19</h1>
            <h3 className="text-xs">Thu</h3>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 py-1.5">
            <h1 className="text-2xl font-semibold">20</h1>
            <h3 className="text-xs">Fri</h3>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 py-1.5">
            <h1 className="text-2xl font-semibold">21</h1>
            <h3 className="text-xs">Sat</h3>
          </div>
        </div>

        <div className="w-full h-48 flex bg-blue-500 rounded-xl mb-2">
          <div className="w-4/5  bg-yellow-300 h-full rounded-xl p-3 flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-lg">Nora - BE</h1>
              <h3 className="text-xs">Noreentindraone - 0.35mg</h3>
            </div>
            <div>
              <h1 className="text-xs">7h30AM</h1>
            </div>
          </div>

          <div className="w-1/5  bg-blue-500 h-full rounded-xl flex justify-center items-center">
            <h1 className="font-bold">V</h1>
          </div>
        </div>

        <div className="w-full h-48 flex bg-green-500 rounded-xl  flex-col p-3">
          <h1 className="font-bold text-lg">Feosol</h1>
          <h3 className="text-xs">Ferrous Sulfate - 600mg</h3>
        </div>
      </div>
    </div>
  );
}
