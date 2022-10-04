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

  // pastikan but

  // mencari button tertentu

  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("back to home");

  // klik tombol users List

  // mencari tombol tertentu
  // pada halamam yang muncul karena klik tombol
  // pastikan button kita memiliki role ="button

  const user = async () =>
    await waitFor(
      () => {
        return screen.findByAltText("Leanee Graham");
      },
      { timeout: 5000 }
    );

  user().then((res) => {
    expect(res).toBeInTheDocument();
  });
});
