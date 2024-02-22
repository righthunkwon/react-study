// import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Counter from "./component/Counter";
import Container from "./component/Container";

function App() {
  let name = "권정훈";

  const counterProps = {
    value3: 1000,
    value4: -1000,
  };

  const style = {
    App: {
      backgroundColor: "cornflowerblue",
    },
  };

  return (
    <div className="App" style={style.App}>
      <Container>
        <Header />
        <h3>안녕 {name}</h3>
        <Counter value1={100} value2={-100} {...counterProps} />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
