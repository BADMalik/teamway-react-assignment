import React from "react";
import { useAppContext } from "../../Providers/contextProvider";
import { questionActionEnums } from "../../actions/questionActions";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const { contextValue, setContextValue } = useAppContext();
  const navigate = useNavigate();
  const getTestResult = () => {
    let extro = 0;
    let intro = 0;

    for (const q of contextValue.questions) {
      const selection = q.options.find(
        (option) => option.value === q.selection
      );
      extro += selection.extroWeight;
      intro += selection.introWeight;
    }

    return intro > extro ? "introvert" : "extrovert";
  };

  const reset = () => {
    setContextValue({ type: questionActionEnums.CLEAR_TEST });
    navigate("/");
  };

  return (
    <>
      <div className=" w-full flex ">
        <div>Your Personality is {getTestResult()}</div>
      </div>
      <button onClick={reset} className="py-2 px-5 text-sky-500">
        Submit
      </button>
    </>
  );
}
