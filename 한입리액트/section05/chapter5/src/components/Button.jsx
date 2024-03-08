// props
// parent -> child  (O)
// child  -> parent (X)
const Button = ({ text, color, number, children }) => {
  const onClickButton = (e) => {
    console.log('@@@ button clicked @@@');
    console.log(e); // 이벤트객체
    console.log(text || 'text prop doesn`t exist.');
    console.log(color || 'color prop doesn`t exist.');
    console.log(number || 'number prop doesn`t exist.');
    console.log(children || 'children element doesn`t exist.');
  };

  const onMouseEnterButton = (e) => {
    console.log('!!! button mouse entered !!!');
  };

  return (
    <button
      onClick={onClickButton}
      onMouseEnter={onMouseEnterButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()} - {number} - {children}
    </button>
  );
};

// setting defaultProps
Button.defaultProps = {
  color: 'black',
};

export default Button;
