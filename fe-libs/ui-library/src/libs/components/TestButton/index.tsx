// @ts-expect-error
import React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material";

//Extending MUI button props to add our custom props
export interface IButton extends ButtonProps {
  text: string;
}
const TestButton = (props: IButton): JSX.Element => {
  const { ref, text } = props;
  return (
    <Button {...props} ref={ref}>
      {text}
    </Button>
  );
};

export default TestButton;
