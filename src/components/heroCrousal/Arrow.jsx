import React from "react";

export function Nextarrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style }}
        onClick={props.onClick}
      />
    </>
  );
}
export function Prevarrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style }}
        onClick={props.onClick}
      />
    </>
  );
}
