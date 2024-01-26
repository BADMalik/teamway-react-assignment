import React from "react";
import { useAppContext } from "../../../providers/contextProvider";
import {
  questionActionEnums,
  testStatus,
} from "../../../actions/questionActions";

export default function QuestionControls() {
  const { contextValue, setContextValue } = useAppContext();

  const handlePrevious = () =>
    setContextValue({ type: questionActionEnums.PREVIOUS_QUESTION });

  const handleNext = () =>
    setContextValue({ type: questionActionEnums.NEXT_QUESTION });

  const handleFormSubmit = () =>
    setContextValue({ type: questionActionEnums.SUBMIT_TEST });

  const previousDisabled = contextValue?.currentIndex === 0;

  const disableNext =
    contextValue?.currentIndex + 1 === contextValue?.questions.length ||
    !contextValue?.questions?.[contextValue?.currentIndex]?.selection;

  const enableSubmit = contextValue?.testStatus === testStatus.READY_TO_SUBMIT;

  return (
    <div className="flex items-center justify-between p-4 pt-4">
      <div className="group">
        <button
          aria-label="previous"
          disabled={previousDisabled}
          onClick={handlePrevious}
          className={`mr-2 text-gray-400 bg-transparent py-2 px-5 ${
            !previousDisabled &&
            "hover:bg-teal-500 hover:text-white hover:rounded hover:shadow-md transition-all duration-300 transform-gpu hover:scale-105"
          } `}
        >
          Previous
        </button>
        <button
          aria-label="next"
          onClick={handleNext}
          disabled={disableNext}
          className={`mr-2 ml-2 ${
            disableNext ? "bg-teal-500" : "bg-teal-400 hover:bg-teal-500 "
          } py-2 px-5 rounded shadow-md transition-all duration-300 transform-gpu hover:scale-105`}
        >
          Next
        </button>
      </div>
      <button
        aria-label="submit"
        disabled={!enableSubmit}
        onClick={handleFormSubmit}
        className={` bg-gray-300 py-2 px-5 rounded shadow-md ${
          enableSubmit
            ? "bg-teal-400 hover:bg-teal-500 hover:text-white hover:rounded hover:shadow-md transition-all duration-300 transform-gpu hover:scale-105"
            : "text-gray-500"
        } `}
      >
        Submit
      </button>
    </div>
  );
}
