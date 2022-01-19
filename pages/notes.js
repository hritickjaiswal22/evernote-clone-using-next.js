import React from "react";
import { useSelector } from "react-redux";

function notes() {
  console.log(useSelector((state) => state.authState));
  return <div>Notes page</div>;
}

export default notes;
