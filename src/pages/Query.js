import React from "react";
import { useLanguage } from "../data/ContextProvider";
import TextField from "@mui/material/TextField";
import { Navigate } from "react-router-dom";
import Nav from "../components/Nav";
//
function Query() {
  const { lang } = useLanguage();
  return (
    <div className="query">
      <Nav />
      
      {lang ? (
        <div>
          <h3>Your prefered language is {lang}</h3>

          <div style={{ padding: "30px" }}>
            <h5>What topic would you like to search for </h5>
            <TextField
              id="standard-basic"
              label="Search"
              style={{ width: "100%" ,color : "white"}}
              sx={{mt :2}}
            />
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}

export default Query;
