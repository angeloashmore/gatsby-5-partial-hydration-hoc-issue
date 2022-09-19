import React from "react";

export const withHOC = (WrappedComponent) => {
  const WithHOC = (props) => {
    return <WrappedComponent {...props} />;
  };

  return WithHOC;
};
