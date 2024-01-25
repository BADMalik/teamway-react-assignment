import React, { useContext } from "react";
import { useAppContext } from "../../../Providers/contextProvider";

export default function QuestionIndex() {
  const { contextValue } = useAppContext();

  return (
    <div className="flex items-center">
      <div className="pl-4 mr-auto uppercase text-teal-400 text-1xl font-semibold underline italic">{`QUESTION ${
        contextValue.currentIndex + 1
      }/${contextValue.questions.length}`}</div>
    </div>
  );
}
