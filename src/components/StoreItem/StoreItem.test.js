import React from "react";
import { render } from "@testing-library/react";
import StoreItem from "./StoreItem";

describe("StoreItem tests", () => {
  it("should render", () => {
    expect(render(<StoreItem />)).toBeTruthy();
  });
});
