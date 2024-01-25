import React, { useContext } from "react";
import { AppContext } from "../../../Providers/contextProvider";

export default function QuestionIndex() {
  const { contextValue, setContextValue } = useContext(AppContext);

  return (
    <div>{`QUESTION ${contextValue.currentIndex + 1}/${
      contextValue.questions.length
    }`}</div>
  );
}
