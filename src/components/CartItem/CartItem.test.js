import React from "react";
import { render } from "@testing-library/react";
import CartItem from "./CartItem";

describe("CartItem tests", () => {
  it("should render", () => {
    expect(render(<CartItem />)).toBeTruthy();
  });
});
