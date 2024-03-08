import './App.css';
import Header from './components/Header'; // child
import Main from './components/Main'; // child
import Footer from './components/Footer'; // child

// Root component(parent)
// rendered by main.jsx
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
