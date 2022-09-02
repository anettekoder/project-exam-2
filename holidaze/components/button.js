import Button from "react-bootstrap/Button";
const bgColor = {
  backgroundColor: "#fcc632",
  color: "#00072D",
};

const CustomButton = ({ content }) => {
  return (
    <div className="d-grid d-md-block pt-2 pt-md-0 ">
      <Button size="lg" btn-block="true" style={bgColor} className="px-5 py-3">
        {content}
      </Button>
    </div>
  );
};

export default CustomButton;
