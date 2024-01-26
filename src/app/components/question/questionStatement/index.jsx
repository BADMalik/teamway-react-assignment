import React from "react";
import { useAppContext } from "../../../providers/contextProvider";
import { questionActionEnums } from "../../../actions/questionActions";
export default function QuestionStatement() {
  const { contextValue, setContextValue } = useAppContext();

  const handleSelection = (e) => {
    setContextValue({
      type: questionActionEnums.ANSWER_QUESTION,
      selection: e,
    });
  };

  const currentQuestion = contextValue?.questions[contextValue.currentIndex];
  return (
    <div>
      <h3 className="p-4  font-semibold text-2xl italic text-black text-justify">
        {currentQuestion?.text}
      </h3>
      <div className="text-center">
        <ul className="w-2/3 pl-4 text-sm font-medium text-black  ">
          {currentQuestion?.options?.map((option) => (
            <li key={option.content} className="w-full ">
              <div className="flex items-center ps-3">
                <input
                  name="selected"
                  type="radio"
                  onChange={() => handleSelection(option.value)}
                  value={option.value || ""}
                  checked={currentQuestion?.selection === option.value}
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
