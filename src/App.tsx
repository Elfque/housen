import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ArticlesPage from "./components/articles/ArticlesPage";
import Article from "./components/article/Article";
import Insights from "./components/insights/Insights";
import InsightDetailsPage from "./components/insights/InsightDetail";
import About from "./components/about/About";
import ContactUs from "./components/contact/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/article/:id" element={<Article />} />

        <Route path="/insights" element={<Insights />} />

        <Route path="/insights/:slug" element={<InsightDetailsPage />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
