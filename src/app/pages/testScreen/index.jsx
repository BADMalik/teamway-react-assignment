import React from "react";
import { useAppContext } from "../../Providers/contextProvider";
import { ROOT } from "../../router/constant/ROUTE";
import { testStatus } from "../../actions/questionActions";
import QuestionComponent from "../../components/question";
import Result from "../../components/result";

const TestScreen = () => {
  const { contextValue } = useAppContext();

  const showRelevantScreen = () => {
    if (
      contextValue.testStatus === testStatus.IN_PROGRESS ||
      contextValue.testStatus === testStatus.READY_TO_SUBMIT
    ) {
      return <QuestionComponent />;
    }
    if (contextValue.testStatus === testStatus.COMPLETED) {
      return <Result />;
    }
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh_-_66px)] bg-gradient-to-r from-gray-200 to-white">
      <div className="text-center">
        <h2 className="text-5xl text-teal-400">
          See if you are an extrovert or introvert?
        </h2>
        <div className="w-4/5 flex flex-col items-center justify-center mx-auto">
          <div className="py-4  px-6 my-6 mx-auto bg-white  shadow-md rounded">
            {showRelevantScreen()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestScreen;
