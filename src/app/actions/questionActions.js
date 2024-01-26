import { data } from "../db/initDB";

export const questionActionEnums = {
  PREVIOUS_QUESTION: "PREVIOUS_QUESTION",
  NEXT_QUESTION: "NEXT_QUESTION",
  ANSWER_QUESTION: "ANSWER_QUESTION",
  CLEAR_TEST: "CLEAR_TEST",
  SUBMIT_TEST: "SUBMIT_TEST",
};

export const testStatus = {
  READY_TO_SUBMIT: "READY_TO_SUBMIT",
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS"
};

export const userActions = {
  SET_USER: "SET_USER",
};

export const initialContextState = {
  questions: data,
  currentIndex: 0,
  userName: null,
  testStatus: testStatus.IN_PROGRESS,
};
