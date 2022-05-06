/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Webサービス勉強会/i);
  expect(linkElement).toBeInTheDocument();
});
