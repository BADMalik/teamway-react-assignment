import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { AppContext } from "../../providers/contextProvider";
import QuestionIndex from "../../components/question/questionIndex";
import { data } from "../../db/initDB";
import QuestionStatement from "../../components/question/questionStatement";
import QuestionControls from "../../components/question/questionControls";
import { testStatus } from "../../actions/questionActions";
import Result from "../../components/result";

const mockUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

describe("initial render", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("question index", async () => {
    const contextValue = {
      currentIndex: 0,
      questions: data,
    };
    const { getByText } = render(
      <AppContext.Provider value={{ contextValue }}>
        <QuestionIndex />
      </AppContext.Provider>
    );
    const questionIndex = getByText(/Question 1 of 5/i);
    expect(questionIndex).toBeInTheDocument();
  });
  test("validate question statement", async () => {
    const contextValue = {
      currentIndex: 0,
      questions: data,
    };
    const { getByText } = render(
      <AppContext.Provider value={{ contextValue }}>
        <QuestionStatement />
      </AppContext.Provider>
    );
    const questionTitle = getByText(/People dont respect your boundries :/i);
    expect(questionTitle).toBeInTheDocument();
  });

  test("validate options", async () => {
    const contextValue = {
      currentIndex: 0,
      questions: data,
    };
    render(
      <AppContext.Provider value={{ contextValue }}>
        <QuestionStatement />
      </AppContext.Provider>
    );
    const options = screen.getAllByRole("radio");
    expect(options).toHaveLength(4);
  });
  test("question buttons on first render", async () => {
    const contextValue = {
      currentIndex: 0,
      questions: data,
    };
    render(
      <AppContext.Provider value={{ contextValue }}>
        <QuestionControls />
      </AppContext.Provider>
    );
    const previousButton = screen.getByLabelText("previous");
    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toBeDisabled();

    const nextButton = screen.getByLabelText("next");
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeDisabled();

    const submitButton = screen.getByLabelText("submit");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });
  test("question buttons on second screen", async () => {
    const contextValue = {
      currentIndex: 1,
      questions: data,
    };
    render(
      <AppContext.Provider value={{ contextValue }}>
        <QuestionControls />
      </AppContext.Provider>
    );
    const previousButton = screen.getByLabelText("previous");
    expect(previousButton).toBeInTheDocument();
    expect(previousButton).toBeEnabled();

    const nextButton = screen.getByLabelText("next");
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeDisabled();

    const submitButton = screen.getByLabelText("submit");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test("test option select", async () => {
    const contextValue = {
      currentIndex: 0,
      questions: data,
    };
    const setContextValue = jest.fn();
    const user = userEvent.setup();

    render(
      <AppContext.Provider value={{ contextValue, setContextValue }}>
        <QuestionStatement />
      </AppContext.Provider>
    );

    const checkInput = screen.getAllByRole("radio");
    expect(checkInput).toHaveLength(4);

    const label = screen.getByLabelText("You protest");
    expect(label).not.toBeChecked();
    fireEvent.click(label);
    expect(label).toBeTruthy();
  });

  test("validate next button events", async () => {
    const contextValue = {
      currentIndex: 2,
      questions: data,
    };
    const setContextValue = jest.fn();
    const user = userEvent.setup();

    const { getByText, getByRole } = render(
      <AppContext.Provider value={{ contextValue, setContextValue }}>
        <QuestionIndex />
        <QuestionStatement />
        <QuestionControls />
      </AppContext.Provider>
    );

    const nextButton = await screen.findByRole("button", { name: "next" });
    userEvent.click(nextButton);

    const questionIndex = getByText(/Question 3 of 5/i);
    expect(questionIndex).toBeInTheDocument();

    const questionTitle = getByText(/you are sleepy but kids are noisy/i);
    expect(questionTitle).toBeInTheDocument();

    const previousButton = getByRole("button", { name: "previous" });
    expect(previousButton).toBeEnabled();
  });

  test("validate previous button click ", async () => {
    let contextValue = {
      currentIndex: 4,
      questions: data,
    };
    const setContextValue = jest.fn();
    const user = userEvent.setup();

    const { getByText, getByRole } = render(
      <AppContext.Provider value={{ contextValue, setContextValue }}>
        <QuestionIndex />
        <QuestionStatement />
        <QuestionControls />
      </AppContext.Provider>
    );

    const nextButton = await screen.findByRole("button", { name: "next" });
    expect(nextButton).toBeDisabled();

    const questionIndex = getByText(/Question 5 of 5/i);
    expect(questionIndex).toBeInTheDocument();

    const questionTitle = getByText(/Food is not cooked nicely/i);
    expect(questionTitle).toBeInTheDocument();

    const previousButton = getByRole("button", { name: "previous" });
    expect(previousButton).toBeEnabled();

    userEvent.click(previousButton);
    contextValue = { ...contextValue, currentIndex: 3 };
    render(
      <AppContext.Provider value={{ contextValue }}>
        <QuestionIndex />
        <QuestionStatement />
        <QuestionControls />
      </AppContext.Provider>
    );
    const prevQIndex = getByText(/Question 4 of 5/i);
    expect(prevQIndex).toBeInTheDocument();
  });
  test("click submit", async () => {
    let contextValue = {
      currentIndex: 4,
      testStatus: testStatus.READY_TO_SUBMIT,
      questions: data?.map((i) => ({ ...i, selection: "A" })),
    };
    const setContextValue = jest.fn();
    const user = userEvent.setup();

    const { getByText, getByRole } = render(
      <AppContext.Provider value={{ contextValue, setContextValue }}>
        <QuestionIndex />
        <QuestionStatement />
        <QuestionControls />
      </AppContext.Provider>
    );

    const submit = await screen.findByRole("button", { name: "submit" });
    expect(submit).toBeEnabled();
    userEvent.click(submit);

    const result = getByText(/Submit/i);
    expect(result).toBeInTheDocument();

    render(
      <AppContext.Provider value={{ contextValue, setContextValue }}>
        <Result />
      </AppContext.Provider>
    );
    const reset = await screen.findByRole("button", { name: "reset" });
    expect(reset).toBeEnabled();

    await waitFor(() => fireEvent.click(reset));

    expect(mockUsedNavigate).toHaveBeenCalledWith("/");
  });
});
