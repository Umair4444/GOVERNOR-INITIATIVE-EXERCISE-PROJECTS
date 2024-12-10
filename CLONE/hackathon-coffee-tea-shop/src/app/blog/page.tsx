import React from "react";

const blog = (params: any) => {
  console.log(params.params);
  return <div>blog {params.blog}</div>;
};

export default blog;
