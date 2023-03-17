// @ts-ignore
import React from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ThemeProvider from "theme";

const AllProviders = ({ children }: any) => (
  <MemoryRouter>
    <ThemeProvider>{children}</ThemeProvider>
  </MemoryRouter>
);

const customRender = (ui: JSX.Element, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render, userEvent };
