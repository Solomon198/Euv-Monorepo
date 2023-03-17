// @ts-ignore
import React from "react";
import { fireEvent, render } from "libs/utils/testing";
import { IButton } from ".";
import TestButton from ".";

const defaultProps: IButton = {
  text: "Button Component",
  onClick: jest.fn(),
};

const getComponent = (defaultProps: IButton) =>
  render(<TestButton {...defaultProps} />);

describe("Button", () => {
  it("Renders", () => {
    const { container } = getComponent(defaultProps);
    expect(container).toBeInstanceOf(HTMLElement);
  });

  it("Displays children as text", () => {
    const { container } = getComponent(defaultProps);
    expect(container).toHaveTextContent("Button Component");
  });

  it("Calls onClick function", () => {
    const { getByRole } = getComponent(defaultProps);
    fireEvent.click(getByRole("button", { name: defaultProps.text }));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
