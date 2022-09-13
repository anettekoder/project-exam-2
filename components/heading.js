const Heading = ({ headingText, subHeadingText }) => {
  return (
    <>
      <div className="mx-5">
        <h1 className="h1 text-md-center">{headingText}</h1>
        <h2 className="h2 text-md-center pb-5">{subHeadingText}</h2>
      </div>
    </>
  );
};

export default Heading;
