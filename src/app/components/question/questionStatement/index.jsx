import React, { useContext } from "react";
import { useAppContext } from "../../../Providers/contextProvider";

export default function QuestionStatement() {
  const { contextValue, setContextValue } = useAppContext();

  const currentQuestion = contextValue?.questions[contextValue.currentIndex];
  console.log({ currentQuestion });
  return (
    <div>
      <h3 className="mb-4 font-semibold text-black ">
        {currentQuestion?.text}
      </h3>
      <div className="text-center">
        <ul className="w-2/3  text-sm font-medium text-black mx-auto bg-white border border-gray-200 rounded-lg ">
          {currentQuestion?.options?.map((option) => (
            <li
              key={option.id}
              className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  name="selected"
                  id={option.id}
                  type="radio"
                  value={
                    contextValue?.questions[contextValue.currentIndex]
                      ?.selection || ""
                  }
                  className="w-4 h-4 text-start text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor={option.content}
                  className=" py-3 ms-2 text-sm font-medium text-black "
                >
                  {option.content}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
