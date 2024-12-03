import React from "react";
import ReactLoading from "react-loading";
function Loading1({ className ,h , w }) {
  return (
    <div>
      <ReactLoading
        type="cylon"
        color="#000000"
        height={h}
        width={w}
        className={`${className}`}
      />
    </div>
  );
}

export default Loading1;
