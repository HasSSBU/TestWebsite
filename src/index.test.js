
import "./index.js";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Title from "/React/my-website/src/index";


test('rendered title', () =>{
  render(<Title/>)
  const titleElement = screen.getByTestId('title-1');
  expect(titleElement).toBeInTheDocument;
})