import { data } from "../DB/initDB";

export const questionActionEnums = {
  START_TEST: "START_TEST",
  PREVIOUS_QUESTION: "PREVIOUS_QUESTION",
  NEXT_QUESTION: "NEXT_QUESTION",
  ANSWER_QUESTION: "ANSWER_QUESTION",
  CLEAR_TEST: "CLEAR_TEST",
  SUBMIT_TEST: "SUBMIT_TEST",
};

export const testStatus = {
  RUNNING: "RUNNING",
  READY_TO_SUBMIT: "READY_TO_SUBMIT",
  COMPLETED: "COMPLETED",
};

export const userActions = {
  SET_USER: "SET_USER",
  DELETE_USER: "DELETE_USER",
};

export const initialContextState = {
  questions: data,
  currentIndex: 0,
  userName: null,
  testStatus: testStatus.RUNNING,
};
