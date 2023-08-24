import { Routes, Route } from "react-router-dom";
import "./App.css";
import Article from "./pages/Article";
import Home from "./pages/Home";
import ErrorCard from "./components/ErrorCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
        <Route path="/topics/:topic" element={<Home />}></Route>
        <Route path="*" element={<ErrorCard message="Sorry, that page does not exist"/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
