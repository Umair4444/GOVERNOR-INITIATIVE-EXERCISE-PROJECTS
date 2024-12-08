import React from "react";

const blog = (params) => {
  console.log(params.params);
  return <div>blog {params.blog}</div>;
};

export default blog;
