const Button = (props) => {
  return (
    <>
      <a
        href={props.href}
        className={`btn btn-${props.btnType}`}
        onClick={props.onClick}
      >
        {props.imgPosition === "left" && (
          <img src={require(`../../assets/images/${props.imgName}`)} alt="" />
        )}
        <span>{props.btnTitle}</span>
        {props.imgPosition === "right" && (
          <img src={require(`../../assets/images/${props.imgName}`)} alt="" />
        )}
      </a>
    </>
  );
};

Button.defaultProps = {
  href: "#!",
};

export default Button;
