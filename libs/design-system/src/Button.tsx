import * as React from "react";

export function Button(props: any) {
  return (
    <button
      className="btn btn-secondary"
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
}
