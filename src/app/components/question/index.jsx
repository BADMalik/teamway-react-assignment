import React from "react";
import QuestionIndex from "./questionIndex";
import QuestionStatement from "./questionStatement";
import QuestionControls from "./questionControls";

export default function QuestionComponent() {
  return (
    <div>
      <QuestionIndex />
      <QuestionStatement />
      <QuestionControls />
    </div>
  );
}
