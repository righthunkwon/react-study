import './App.css';
import Button from './components/Button';

function App() {
  const buttonProps = {
    text: 'buttonProps',
    color: 'blue',
    number: 123456789,
  };
  return (
    <>
      <Button text={'props1'} />
      <Button text={'props2'} color={'red'} />
      <Button {...buttonProps} />{' '}
      <Button {...buttonProps}>
        <div>자식요소</div>
      </Button>
    </>
  );
}

export default App;
