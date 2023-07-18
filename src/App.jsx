import { Routes, Route } from "react-router-dom";
import "./App.css";
import Article from "./components/Article";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
      </Routes>
    </div>
  );
}

export default App;
