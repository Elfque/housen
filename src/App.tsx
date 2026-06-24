import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ArticlesPage from "./components/articles/ArticlesPage";
import Article from "./components/article/Article";
import Insights from "./components/insights/Insights";
import InsightDetailsPage from "./components/insights/InsightDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/article/:id" element={<Article />} />

        <Route path="/insights" element={<Insights />} />

        <Route path="/insights/:slug" element={<InsightDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
