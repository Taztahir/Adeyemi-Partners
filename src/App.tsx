import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import PracticeAreaDetail from './pages/PracticeAreaDetail';
import Attorneys from './pages/Attorneys';
import AttorneyProfile from './pages/AttorneyProfile';
import CaseResults from './pages/CaseResults';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-ivory text-charcoal selection:bg-burgundy/10 selection:text-burgundy">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/practice-areas/:slug" element={<PracticeAreaDetail />} />
            <Route path="/attorneys" element={<Attorneys />} />
            <Route path="/attorneys/:slug" element={<AttorneyProfile />} />
            <Route path="/case-results" element={<CaseResults />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
