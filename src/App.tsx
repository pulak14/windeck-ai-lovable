
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import Product from './pages/Product';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Waitlist from './pages/Waitlist';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="product" element={<Product />} />
          <Route path="features" element={<Features />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="resources/blog" element={<Blog />} />
          <Route path="resources/blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
