import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  department: string;
  why: string;
  salary: string;
  introduction: string;
  dreams: string;
  email: string;
}

export default function Job() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const [data, setData] = useState<IForm | any>();
  const onVaild = (formData: IForm) => {
    setData(JSON.stringify(formData));
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-blue-200 ">
      <div className="w-full max-w-md rounded-2xl  h-auto p-3 px-5 border-2 border-b-8 border-r-8 border-black bg-red-50">
        <form className="flex flex-col" onSubmit={handleSubmit(onVaild)}>
          <h1 className="text-center text-2xl font-semibold my-6">
            Job Application Form
          </h1>

          <div className="mb-2">
            <h1 className="font-semibold my-2">
              What department do yo want to work for?
              <span className="text-red-500 text-sm font-bold ml-3">
                {errors?.department?.message}
              </span>
            </h1>
            <div className="font-medium">
              <label htmlFor="sale" className="flex items-center gap-2">
                <input
                  {...register("department", {
                    required: "*required",
                  })}
                  type="radio"
                  value="sale"
                  id="sale"
                />
                Sales
              </label>
              <label htmlFor="market" className="flex items-center gap-2">
                <input
                  {...register("department", {
                    required: "*required",
                  })}
                  type="radio"
                  value="market"
                  id="market"
                />
                Markething
              </label>
              <label htmlFor="account" className="flex items-center gap-2">
                <input
                  {...register("department", {
                    required: "*required",
                  })}
                  type="radio"
                  value="account"
                  id="account"
                />
                Accounting
              </label>
              <label htmlFor="customer" className="flex items-center gap-2">
                <input
                  {...register("department", {
                    required: "*required",
                  })}
                  type="radio"
                  value="customer"
                  id="customer"
                />
                Customer Service
              </label>
            </div>
          </div>

          <div className="mb-2">
            <h1 className="font-semibold my-2 ">
              Why do you want to join this company?
              <span className="text-red-500 text-sm font-bold ml-3">
                {errors?.why?.message}
              </span>
            </h1>
            <div className="font-medium">
              <label htmlFor="money" className="flex items-center gap-2">
                <input
                  {...register("why", { required: "*required" })}
                  type="radio"
                  value="money"
                  id="money"
                />
                I want money!
              </label>
              <label htmlFor="company" className="flex items-center gap-2">
                <input
                  {...register("why", { required: "*required" })}
                  type="radio"
                  value="company"
                  id="company"
                />
                I love this compnay
              </label>
              <label htmlFor="learn" className="flex items-center gap-2">
                <input
                  {...register("why", { required: "*required" })}
                  type="radio"
                  value="learn"
                  id="learn"
                />
                I want to learn
              </label>
              <label htmlFor="dnw" className="flex items-center gap-2">
                <input
                  {...register("why", { required: "*required" })}
                  type="radio"
                  value="dnw"
                  id="dnw"
                />
                I don't know why
              </label>
            </div>
          </div>
          <div className="mb-3">
            <h1 className="font-semibold my-1">Salary</h1>
            <select
              name="salary"
              className="w-full border-2 border-black rounded-md text-md font-semibold p-1 box-border"
            >
              <option value="50">$50K</option>
              <option value="100">$100K</option>
              <option value="150">$150K</option>
              <option value="200">$200K</option>
            </select>
          </div>

          <div className="mb-3">
            <h1 className="font-semibold my-1">Intoduce yourself</h1>
            <input
              {...register("introduction", {
                required: "Please write down your introduction.",
              })}
              type="text"
              name="introduction"
              className="w-full border-2 border-black rounded-md text-md font-semibold p-1 box-border"
            />
            <h1 className="text-red-500 text-sm font-bold">
              {errors?.introduction?.message}
            </h1>
          </div>

          <div className="mb-3">
            <h1 className="font-semibold my-1">Tell us what your dreams are</h1>

            <textarea
              {...register("dreams", {
                required: "Please tell us what your dreams are.",
                minLength: {
                  value: 10,
                  message: "Please write down more than 10 characters.",
                },
              })}
              name="dreams"
              className="w-full resize-none border-2 border-black rounded-md"
              rows={3}
            />
            <h1 className="text-red-500 text-sm font-bold">
              {errors?.dreams?.message}
            </h1>
          </div>

          <div className="mb-3">
            <h1 className="font-semibold my-1">Email</h1>
            <input
              {...register("email", {
                required: "Please wirte down your email.",
                validate: (value) =>
                  value.includes("@naver.com") || "Only @naver is allowed",
              })}
              type="email"
              name="email"
              className="w-full border-2 border-black rounded-md text-md font-semibold p-1 box-border"
            />
            <h1 className="text-red-500 text-sm font-bold">
              {errors?.email?.message}
            </h1>
          </div>

          <button className="w-full h-auto my-5 border-2 border-b-4 border-r-4 rounded-md  border-black p-2 bg-yellow-300 font-semibold hover:bg-orange-200">
            Give me this job
          </button>

          {data ? (
            <h1 className="w-full h-auto box-border resize-none bg-transparent break-all">
              {data}
            </h1>
          ) : null}
        </form>
      </div>
    </div>
  );
}
