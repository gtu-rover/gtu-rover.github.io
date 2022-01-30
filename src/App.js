import HomePage from './pages';
import About from './pages/about';
import './utils/translate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Members from './pages/members';
import { ModalProvider } from './components/Modal/modalContext';
import SnackbarProvider from 'react-simple-snackbar';
import Erc21 from './pages/erc2021';
import withLogin from './containers/withLogin';

// TODO: add elevator

function App() {
  const MembersWithAdmin = withLogin(Members);
  const HomePageWithAdmin = withLogin(HomePage);
  const Erc21WithAdmin = withLogin(Erc21);

  return (
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
                  <Route index element={<HomePageWithAdmin />} />
                  <Route path="members" element={<MembersWithAdmin />} />
                  <Route path="erc2021" element={<Erc21WithAdmin />} />
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
