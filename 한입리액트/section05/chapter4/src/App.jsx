import './App.css';
import Button from './components/Button';

function App() {
  const buttonProps = {
    text: 'buttonProps',
    color: 'blue',
    number: 123,
  };
  return (
    <>
      <div>
        <Button text={'props1'} />
      </div>
      <div>
        <Button text={'props2'} color={'red'} />
      </div>
      <div>
        <Button {...buttonProps} />
      </div>
      <div>
        {' '}
        <Button {...buttonProps}>
          <div>자식요소</div>
        </Button>
      </div>
    </>
  );
}

export default App;
