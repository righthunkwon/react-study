import { useState } from 'react';

// Custom Hook
const useInput = () => {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
};

export default useInput;
