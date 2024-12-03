import React from "react";
import ReactLoading from "react-loading";

function Loading({ className, h=50, w=100 }) {
  return (
    <div>
      <ReactLoading
        type="bubbles"
        color="#000000"
        width={w}
        height={h}
        className={`
           ${className}`}
      />
    </div>
  );
}

export default Loading;
