import React, { useContext, useEffect } from "react";
import { AppContext } from "../Providers/contextProvider";
import { useNavigation } from "react-router-dom";
import { ROOT } from "../router/constant/ROUTE";
import { questionActionEnums, testStatus } from "../actions/questionActions";
import QuestionComponent from "../components/question";

const TestScreen = () => {
  const { contextValue, setContextValue } = useContext(AppContext);

  const showRelevantScreen = () => {
    if (contextValue.testStatus === testStatus.STARTED) {
      return <QuestionComponent />;
    }
  };
  console.log({ contextValue });

  return (
    <div className="text-center py-4 text-4xl">
      <h2>See if you are an extrovert or introvert?</h2>
      <div className="py-4 my-6 w-2/3 mx-auto bg-red-50">
        {showRelevantScreen()}
      </div>
    </div>
  );
};

export default TestScreen;
