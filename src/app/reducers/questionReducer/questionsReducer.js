import {
  initialContextState,
  questionActionEnums,
  userActions,
  testStatus,
} from "../../actions/questionActions";

export const questionReducer = (state, action) => {
  switch (action.type) {
    case questionActionEnums.PREVIOUS_QUESTION:
      return { ...state, currentIndex: state.currentIndex - 1 };
    case questionActionEnums.NEXT_QUESTION:
      return { ...state, currentIndex: state.currentIndex + 1 };
    case questionActionEnums.ANSWER_QUESTION:
      const updatedQuestions = state.questions.map((question, index) =>
        index == state.currentIndex
          ? { ...question, selection: action?.selection }
          : question
      );
      return {
        ...state,
        questions: updatedQuestions,
        testStatus: updatedQuestions.every((question) => question.selection)
          ? testStatus.READY_TO_SUBMIT
          : testStatus.IN_PROGRESS,
      };
    case questionActionEnums.x:
      return { ...state, testStatus: testStatus.COMPLETED };
    case questionActionEnums.CLEAR_TEST:
      return initialContextState;
    case userActions.SET_USER:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};
