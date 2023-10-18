import React from "react";
function Button({ children, className, ...buttonProps }) {
  return (
    <button {...buttonProps} className={`${className} buttonstyle`}>
      {children}
    </button>
  );
}

export default Button;
