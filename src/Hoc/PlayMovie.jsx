import React from 'react'
import PlayNav from "../components/navbar/PlayNav"

const PlayMovie = (Components) =>
({ ...Props }) => {
  return (
    <div>
      <PlayNav />
      <Components {...Props} />
    </div>
  );
};

export default PlayMovie