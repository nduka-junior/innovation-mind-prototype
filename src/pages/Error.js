import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
function Error() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: " 30% 0",
      }}
    >
      <h1>404 Error</h1>
      <br />
      <h3>No results found!</h3>
     
      <br />
      <Button variant="outlined">
        <Link to="/innovation-mind-prototype">Home</Link>
      </Button>
    </div>
  );
}

export default Error;
