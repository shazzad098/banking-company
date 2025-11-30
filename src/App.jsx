import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Careers from './pages/Careers';
import About from './pages/About';
import Security from './pages/Security'; // Import Security
import LoginPage from './pages/LoginPage'; // Import LoginPage
import SignUpPage from './pages/SignUpPage'; // Import SignUpPage

function App() {
  return (
    <div className="min-h-screen font-sans bg-dark text-white selection:bg-primary selection:text-black overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/security" element={<Security />} /> {/* Add Route */}
          <Route path="/login" element={<LoginPage />} /> {/* নতুন রুট যোগ করুন */}
          <Route path="/signup" element={<SignUpPage />} /> {/* নতুন রুট যোগ করুন */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;