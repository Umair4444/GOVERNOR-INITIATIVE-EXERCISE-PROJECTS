import React from "react";

const shopDetails = (params:any) => {
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
