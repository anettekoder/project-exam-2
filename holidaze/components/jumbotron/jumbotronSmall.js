import React from "react";
import Image from "next/image";

// Image for jumbotron for smaller devices

const JumbotronSmall = ({ imgPath }) => {
  return (
    <>
      <div>
        <Image src={imgPath} height={1500} objectFit={"cover"} />
      </div>
    </>
  );
};

export default JumbotronSmall;
