import React from "react";
import Image from "next/image";

// Image for jumbotron for smaller devices

const height = {
  height: "700px",
};

const JumbotronSmall = ({ imgPath, altText, height }) => {
  return (
    <>
      <div className="pb-5">
        <Image
          src={imgPath}
          height={height}
          objectFit={"cover"}
          alt={altText}
        />
      </div>
    </>
  );
};

export default JumbotronSmall;
