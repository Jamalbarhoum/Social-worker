import "./App.css";
import AddArticle from "./components/AddArticle";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Hero/>
      <AddArticle />
    </div>
  );
}

export default App;
