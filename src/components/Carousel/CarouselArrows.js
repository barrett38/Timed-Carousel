const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        width: "25px",
        height: "100px",
        borderRadius: "4px",
      }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        width: "30px",
        height: "100px",
        borderRadius: "4px",
      }}
      onClick={onClick}
    />
  );
};

export { CustomPrevArrow, CustomNextArrow };
