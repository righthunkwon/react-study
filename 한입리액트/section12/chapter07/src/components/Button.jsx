import './Button.css';

const Button = ({ text, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`Button Button_${type}`} // 동적 타입
    >
      {text}
    </button>
  );
};

export default Button;
