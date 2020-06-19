import React from "react";

import "./with-spinner.style.scss";

const Spinner = () => (
  <div className="spinner-overlay">
    <div className="spinner-container" />
  </div>
);

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) =>
  isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;

export default WithSpinner;
