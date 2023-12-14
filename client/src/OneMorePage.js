import React from "react";
import { Link } from "react-router-dom";

const OneMorePage = () => {
  return (
    <div>
      I am the new page
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default OneMorePage;
