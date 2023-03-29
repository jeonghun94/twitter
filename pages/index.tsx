export default function Home() {
  return (
    <div className="w-full min-h-screen  border-blue-100 dark:bg-black dark:text-white">
      <h1>Hi</h1>

      <div className="fixed bottom-0 w-full  h-[4.5rem] bg-[#1C9BEF] grid grid-cols-2 gap-24 place-content-center place-items-center">
        <div className=" w-full flex flex-col items-end">
          <div className="text-white">
            <h1 className="text-2xl font-bold">최신 소식을 놓치지 마세요</h1>
            <h3>트위터를 사용하면 가장 먼저 알게 됩니다.</h3>
          </div>
        </div>

        <div className=" w-full flex justify-center gap-3 font-semibold">
          <button className="px-4 py-1 rounded-2xl text-white border">
            로그인
          </button>
          <button className="px-4 py-1 rounded-2xl text-black bg-white">
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
}
