import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ArticlesPage from "./components/articles/ArticlesPage";
import Article from "./components/article/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
