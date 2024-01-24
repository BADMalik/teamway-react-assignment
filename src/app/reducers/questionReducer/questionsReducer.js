import {
  initialContextState,
  questionActionEnums,
  userActions,
} from "../../actions/questionActions";

export const questionReducer = (state, action) => {
  switch (action.type) {
    case questionActionEnums.START_TEST:
      return { ...initialContextState, questions: action.questions };
    case questionActionEnums.PREVIOUS_QUESTION:
      return { ...state, currentIndex: state.currentIndex - 1 };
    case questionActionEnums.NEXT_QUESTION:
      return { ...state, currentIndex: state.currentIndex + 1 };
    case questionActionEnums.ANSWER_QUESTION:
      const questions = state.questions.map((question) =>
        question.index === state.currentIndex
          ? { ...question, answer: action.answer }
          : question
      );
      return {
        ...state,
        questions,
        testStatus: questions.some((question) => !question.answer)
          ? testStatus.RUNNING
          : testStatus.READY_TO_SUBMIT,
      };
    case questionActionEnums.SUBMIT_TEST:
      return { ...state, testStatus: testStatus.COMPLETED };
    case questionActionEnums.CLEAR_TEST:
      return initialContextState;
    case userActions.SET_USER:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};
