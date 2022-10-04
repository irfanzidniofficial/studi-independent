import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // mencari text tertentu

  const title = screen.getByText(/Why you do test?/i);
  expect(title).toBeInTheDocument();

  // mencari button tertentu

  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Users List");

  // klik tombol users List
  fireEvent.click(btn);

  // mencari tombol tertentu
  // pada halamam yang muncul karena klik tombol
  // pastikan button kita memiliki role ="button

  const btn2 = screen.getByRole("button");
  expect(btn2).toBeInTheDocument();
  expect(btn2).toHaveTextContent("back to home");
});
