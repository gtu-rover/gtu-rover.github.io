import HomePage from './pages';
import About from './pages/about';
import './utils/translate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Members from './pages/members';
import Admin from './pages/admin';
import { ModalProvider } from './components/Modal/modalContext';
import SnackbarProvider from 'react-simple-snackbar';
import Erc21 from './pages/erc2021';

// TODO: add elevator

function App() {
  return (
    // TODO: react router
    <>
      <SnackbarProvider>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="about" element={<About />} />
                <Route path="members" element={<Members />} />
                <Route path="erc2021" element={<Erc21 />} />
                <Route path="admin">
                  <Route index element={<Admin />} />
                  <Route path="members" element={<Members editable />} />
                  <Route path="erc2021" element={<Erc21 editable />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
