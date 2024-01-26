import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../providers/contextProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { userActions } from "../../actions/questionActions";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  userName: yup
    .string()
    .required()
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),
});

export default function Home() {
  const { setContextValue } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { userName } = data;
    setContextValue({
      type: userActions.SET_USER,
      payload: userName,
    });
    navigate("/test-screen");
  };
  return (
    <div className="flex items-center justify-center font-sans text-4xl h-screen">
      <form
        aria-label="form"
        className="w-1/3 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="website-admin"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            {...register("userName")}
            type="text"
            className="rounded-none w-1/2 rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm p-2.5  "
            placeholder="Enter Username"
          />
        </div>
        <span className="text-sm text-red-400">
          {errors?.userName?.message}
        </span>
      </form>
    </div>
  );
}
