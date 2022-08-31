import React from "react";
import Image from "next/image";

import Header1 from "../../assets/images/headers/header1.jpg";

const JumbotronLarge = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="jumbotron-inner">
          <h1>
            Holidaze is a service for booking hotels, apartments and B&B in
            Bergen.
          </h1>
          <h2>
            Find your accommodation with us now, and stay safely and offordable.
          </h2>
        </div>
      </div>
    </>
  );
};

export default JumbotronLarge;
