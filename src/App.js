import HomePage from './pages';
import About from './pages/about';
import './utils/translate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// TODO: add elevator

function App() {
  return (
    // TODO: react router
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
