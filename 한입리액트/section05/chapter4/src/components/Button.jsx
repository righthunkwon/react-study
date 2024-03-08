// props
// parent -> child  (O)
// child  -> parent (X)
const Button = ({ text, color, number, children }) => {
  const onClickButton = () => {
    console.log(text);
    console.log(number || 'number prop doesn`t exist.');
    console.log(children || 'children element doesn`t exist.');
  };

  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} - {color.toUpperCase()} - {number} - {children}
    </button>
  );
};

// setting defaultProps
Button.defaultProps = {
  color: 'black',
};

export default Button;
