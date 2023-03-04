//@ts-ignore
import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Playground: FC = () => {
  return (
    <>
      <Typography m={5} variant="h6" sx={{ color: "text.primary" }}>
        Solomon Playground
      </Typography>
      <Button variant="contained">Welcome</Button>
    </>
  );
};

export default Playground;
