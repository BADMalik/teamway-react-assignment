import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Home from ".";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "../../components/navBar";
import { AppContext } from "../../Providers/contextProvider";

/**
 * Mock Navigate
 */
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

describe("Home Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("renders home page", () => {
    const { getByText } = render(<Home />);
    const text = getByText("Username");
    expect(text).toBeInTheDocument();
  });

  it("renders navbar", () => {
    const { getByText } = render(<Navbar />);
    const text = getByText("Personality Test");
    expect(text).toBeInTheDocument();
  });

  it("input is rendered successfully", () => {
    render(<Home />);
    const button = screen.queryByPlaceholderText(/Enter Username/i);
    expect(button).toBeInTheDocument();
  });

  it("input is rendered successfully", async () => {
    const setContextValue = jest.fn();
    render(
      <AppContext.Provider value={{ setContextValue }}>
        <Home />
      </AppContext.Provider>
    );

    const user = userEvent.setup();

    const input = screen.queryByPlaceholderText(/Enter Username/i);
    expect(input).toBeInTheDocument();

    await user.type(input, "newvalue");
    const form = screen.getByRole("form");

    await waitFor(() => fireEvent.submit(form));

    expect(mockUsedNavigate).toHaveBeenCalledWith("/test-screen");
  });
});
