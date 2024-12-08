import React from "react";

const shopDetails = (params) => {
  console.log(params.params.shopdetails[1]);
  return (
    <div>
      shopDetails
      {}
      {params.params.shopdetails}
    </div>
  );
};

export default shopDetails;
