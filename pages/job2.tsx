import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  department: string;
  why: string;
  dreams: string;
  email: string;
  introduction: string;
  salary: string;
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const [data, setData] = useState("");
  const onValid = (data: IForm) => {
    setData(JSON.stringify(data));
  };
  return (
    <form
      className="min-h-screen w-full flex justify-center	 bg-teal-50 p-20"
      onSubmit={handleSubmit(onValid)}
    >
      <div className="w-full max-w-md border-2 rounded-3xl border-r-8 border-b-8 border-black bg-rose-100 p-10">
        <h1 className="text-center text-2xl font-bold">Job Application Form</h1>
        <div className="mt-10 font-semibold">
          <span className="mb-3 block text-sm">
            What department do you want to work for?
            {errors.department ? (
              <span className="text-red-500 text-xs font-bold"> *required</span>
            ) : null}
          </span>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-1">
              <input
                {...register("department", {
                  required: true,
                })}
                className="h-4 w-4 accent-black"
                type="radio"
                value="sales"
                id="sales"
              />
              <label className="text-xs" htmlFor="sales">
                Sales
              </label>
            </div>
            <div className="flex items-center space-x-1">
              <input
                {...register("department", {
                  required: true,
                })}
                className="h-4 w-4 accent-black"
                type="radio"
                id="marketing"
                value="marketing"
              />
              <label className="text-xs" htmlFor="marketing">
                Marketing
              </label>
            </div>
            <div className="flex items-center space-x-1">
              <input
                {...register("department", {
                  required: true,
                })}
                className="h-4 w-4 accent-black"
                type="radio"
                id="accounting"
                value="accounting"
              />
              <label className="text-xs" htmlFor="accounting">
                Accounting
              </label>
            </div>
            <div className="flex items-center space-x-1">
              <input
                {...register("department", {
                  required: true,
                })}
                className="h-4 w-4 accent-black"
                type="radio"
                id="cus"
                value="customer_service"
              />
              <label className="text-xs" htmlFor="cus">
                Customer Service
              </label>
            </div>
          </div>
        </div>
        <div className="mt-5 font-semibold">
          <span className="mb-3 block text-sm">
            Why do you want to join this company?
            {errors.why ? (
              <span className="text-red-500 text-xs font-bold"> *required</span>
            ) : null}
          </span>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-1">
              <input
                className="h-4 w-4 accent-black"
                {...register("why", {
                  required: true,
                })}
                type="radio"
                id="money"
                value="money"
              />
              <label className="text-xs" htmlFor="money">
                I want money!
              </label>
            </div>
            <div className="flex items-center space-x-1">
              <input
                className="h-4 w-4 accent-black"
                {...register("why", {
                  required: true,
                })}
                type="radio"
                id="company"
                value="love"
              />
              <label className="text-xs" htmlFor="company">
                I love this company
              </label>
            </div>
            <div className="flex items-center space-x-1">
              <input
                className="h-4 w-4 accent-black"
                {...register("why", {
                  required: true,
                })}
                type="radio"
                id="learn"
                value="learn"
              />
              <label className="text-xs" htmlFor="learn">
                I want to learn
              </label>
            </div>
            <div className="flex items-center space-x-1">
              <input
                className="h-4 w-4 accent-black"
                {...register("why", {
                  required: true,
                })}
                type="radio"
                id="why"
                value="dont_know"
              />
              <label className="text-xs" htmlFor="why">
                I don't know why
              </label>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col font-semibold">
          <span className="mb-1 text-sm">Salary</span>
          <select
            {...register("salary", {
              required: true,
            })}
            className="rounded-md border-2 border-black py-1 px-2 text-xs"
          >
            <option>$50K</option>
            <option>$100K</option>
            <option>$150K</option>
            <option>$200K</option>
          </select>
        </div>
        <div className="mt-5 flex flex-col font-semibold">
          <span className="mb-1 text-sm">Intoduce yourself</span>
          <input
            className={`rounded-md border-2 border-black py-1 px-2 text-xs ${
              errors.introduction ? "outline-red-500" : ""
            }`}
            type="text"
            {...register("introduction", {
              required: "Please write down your introduction.",
            })}
          />
          {errors.introduction ? (
            <span className="text-red-500 text-xs font-bold">
              {errors.introduction.message}
            </span>
          ) : null}
        </div>
        <div className="mt-5 flex flex-col font-semibold">
          <span className="mb-1 text-sm">Tell us what your dreams are</span>
          <textarea
            {...register("dreams", {
              required: "Please tell us what your dreams are.",
              validate: (text) =>
                text.length > 10
                  ? undefined
                  : "Please write more than 10 characters.",
            })}
            rows={5}
            className={`resize-none rounded-md border-2 border-black py-1 px-2 text-xs ${
              errors.dreams ? "outline-red-500" : ""
            }`}
          ></textarea>
          {errors.dreams ? (
            <span className="text-red-500 text-xs font-bold">
              {errors.dreams.message}
            </span>
          ) : null}
        </div>
        <div className="mt-5 flex flex-col font-semibold">
          <span className="mb-1 text-sm">Email</span>
          <input
            className={`rounded-md border-2 border-black py-1 px-2 text-xs ${
              errors.email ? "outline-red-500" : ""
            }`}
            type="email"
            {...register("email", {
              required: "Please write down your email.",
              validate: {
                naver: (text) =>
                  text.includes("@naver.com")
                    ? undefined
                    : "Only @naver is allowed.",
              },
            })}
          />
          {errors.email ? (
            <span className="text-red-500 text-xs font-bold">
              {errors.email.message}
            </span>
          ) : null}
        </div>
        <button className="mt-10 border-2 w-full rounded-md border-r-4 border-b-4 border-black bg-amber-300 py-3 text-center hover:bg-amber-200 active:border-b-2 active:border-r-2 text-sm font-bold">
          Give me this job
        </button>
        {data ? (
          <span className="mt-5 font-medium block break-all">{data}</span>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}
