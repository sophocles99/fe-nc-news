import { Routes, Route } from "react-router-dom";
import "./App.css";
import Article from "./pages/Article";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import ErrorCard from "./components/ErrorCard";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
        <Route path="/topics/:topic" element={<Main />}></Route>
        <Route path="*" element={<ErrorCard message="Sorry, that page does not exist"/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
