import * as React from "react";

export function Button(props: any) {
  return (
    <button
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
}
