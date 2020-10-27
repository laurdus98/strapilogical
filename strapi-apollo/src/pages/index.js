// export default () => <>Welcome to next.js</>;
import React, { useState } from "react";
import { Button, Alert } from "reactstrap";

import { RestaurantList } from "../components/RestaurantList/index.js";
import { PageList } from "../components/RestaurantList/RestaurantList";

export default () => {
  return (
    <>
      <div>
        <Alert color="primary">
          Hello Project strapi-apollo with Bootstrap
        </Alert>
        <Button color="primary">strapi-apollo</Button>
        {false && <RestaurantList />}
        {true && <PageList />}
      </div>
    </>
  );
};
