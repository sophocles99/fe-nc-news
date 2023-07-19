import { Routes, Route } from "react-router-dom";
import "./App.css";
import Article from "./pages/Article";
import Main from "./pages/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
      </Routes>
    </div>
  );
}

export default App;
