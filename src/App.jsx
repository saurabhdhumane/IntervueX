// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import MobileFixedCTA from './components/MobileFixedCTA';
// import ScrollToTop from './components/ScrollToTop';

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-indigo-100 selection:text-indigo-900">
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           </Routes>
//         </main>
//         <Footer />
//         <MobileFixedCTA />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MobileFixedCTA from './components/MobileFixedCTA';
import ScrollToTop from './components/ScrollToTop';
import { SpeedInsights } from "@vercel/speed-insights/react";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <MobileFixedCTA />
      </div>
       <SpeedInsights />
    </Router>
  );
}

export default App;