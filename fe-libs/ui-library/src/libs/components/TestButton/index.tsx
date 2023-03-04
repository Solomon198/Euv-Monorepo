//@ts-ignore
import React from "react";
import MuiButton from "@mui/material/Button";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return <MuiButton variant="contained">{text}</MuiButton>;
};

export default Button;
