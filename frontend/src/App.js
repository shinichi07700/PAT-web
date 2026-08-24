import "@/App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { LangProvider } from "@/lib/i18n";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import CategoryPage from "@/pages/CategoryPage";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import OurSciences from "@/pages/OurSciences";
import Facilities from "@/pages/Facilities";
import Testimonials from "@/pages/Testimonials";
import Career from "@/pages/Career";
import Contact from "@/pages/Contact";

function App() {
  return (
    <div className="App">
      <LangProvider>
        <HashRouter>
          <Toaster position="top-center" richColors />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:slug" element={<CategoryPage />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/oursciences" element={<OurSciences />} />
              <Route path="/about/facilities" element={<Facilities />} />
              <Route path="/about/sustainability" element={<Navigate to="/about" replace />} />
              <Route path="/about/testimonials" element={<Testimonials />} />
              <Route path="/about/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </HashRouter>
      </LangProvider>
    </div>
  );
}

export default App;
