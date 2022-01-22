import HomePage from './pages';
import About from './pages/about';
import './utils/translate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Members from './pages/members';

// TODO: add elevator

function App() {
  return (
    // TODO: react router
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
