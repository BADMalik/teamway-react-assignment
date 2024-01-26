import React, { useContext } from "react";
import { useAppContext } from "../../../providers/contextProvider";

export default function QuestionIndex() {
  const { contextValue } = useAppContext();

  return (
    <div className="flex items-center">
      <div className="pl-4 mr-auto uppercase text-teal-400 text-1xl font-semibold underline italic">{`Question ${
        contextValue.currentIndex + 1
      } of ${contextValue.questions.length}`}</div>
    </div>
  );
}
