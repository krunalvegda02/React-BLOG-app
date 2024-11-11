import React, { useId } from "react";

const Input = React.forwardRef(function Input(          //! for forward refernece to our real componenet
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black 
            outline-none focus:bg-gray-50 duration-200 border
          border-gray-200 w-full
            ${className}`}
        ref={ref}         //! important: ref is for forward reference for that we can pass reference of this on out component and give access to state here
        {...props}
        id={id}
      />
    </div>
  );
});
export default Input;
