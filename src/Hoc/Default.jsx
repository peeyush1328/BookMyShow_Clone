import React from "react";
import Navbar from "../components/navbar/Navbar";

const Default =
  (Components) =>
  ({ ...Props }) => {
    return (
      <div>
        <Navbar />
        <Components {...Props} />
      </div>
    );
  };

export default Default;
