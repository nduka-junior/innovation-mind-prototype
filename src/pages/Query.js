import React from "react";
import { useLanguage } from "../data/ContextProvider";
import TextField from "@mui/material/TextField";
import { Navigate } from "react-router-dom";
//
function Query() {
  const { lang } = useLanguage();
  return (
   lang ?  <div>
      <h3>Your prefered language is {lang}</h3>

      <div style={{ padding: "30px" }}>
        <h5>What topic would you like to search for </h5>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          style={{ width: "100%" }}
        />
      </div>
    </div> : <Navigate to="/" />
  );
}

export default Query;