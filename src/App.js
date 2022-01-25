import HomePage from './pages';
import About from './pages/about';
import './utils/translate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Members from './pages/members';
import Admin from './pages/admin';
import { ModalProvider } from './components/Modal/modalContext';

// TODO: add elevator

function App() {
  return (
    // TODO: react router
    <>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="about" element={<About />} />
              <Route path="members" element={<Members />} />
              <Route path="admin">
                <Route index element={<Admin />} />
                <Route path="members" element={<Members editable />} />
              </Route>
            </Route>
          </Routes>
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/admin" element={<Admin />} />
          </Routes> */}
        </BrowserRouter>
      </ModalProvider>
    </>
  );
}

export default App;
