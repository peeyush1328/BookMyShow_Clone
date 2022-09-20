import React from "react";
import Movienavbar from "../components/navbar/Movienavbar";

const Movies =
  (Components) =>
  ({ ...Props }) => {
    return (
      <div>
        <Movienavbar />
        <Components {...Props} />
      </div>
    );
  };

export default Movies;
