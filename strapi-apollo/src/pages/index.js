// export default () => <>Welcome to next.js</>;
import React, { useState } from "react";
import { Button, Alert } from "reactstrap";

import { RestaurantList } from "../components/RestaurantList/index.js";

export default () => {
  return (
    <>
      <div>
        <Alert color="primary">
          Hello Project strapi-apollo with Bootstrap{" "}
        </Alert>
        <Button color="primary">strapi-apollo</Button>
        <RestaurantList />
      </div>
    </>
  );
};
