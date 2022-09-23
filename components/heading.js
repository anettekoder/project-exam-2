const Heading = ({ headingText, subHeadingText, landingPageHeading }) => {
  return (
    <>
      <div className="">
        <div className="h1">{landingPageHeading}</div>
        <div className="h1 text-center">{headingText}</div>
        <div className="h2 text-md-center pb-5">{subHeadingText}</div>
      </div>
    </>
  );
};

export default Heading;
