import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import HomePage from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from '../utils/firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import { Box, Button, Flex } from 'rebass';
import { Input, Label } from '@rebass/forms';
import { useSnackbar } from 'react-simple-snackbar';

const provider = new GoogleAuthProvider();

const Admin = () => {
  const auth = getAuth();
  const [email, setEmail] = useState('rover@gtu.edu.tr');
  const [pass, setPass] = useState('');
  const [tryLogin, setTryLogin] = useState(true);
  const [user] = useAuthState(auth);
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // const user = userCredential.user;
        openSnackbar('Logged in!');
      })
      .catch((error) => {
        openSnackbar(`${error.code}: ${error.message}`);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (!u) setTryLogin(false);
    });
  }, [user]);

  return (
    <>
      {user ? (
        <HomePage editable />
      ) : (
        !tryLogin && (
          <>
            <Box
              width={[1, 1 / 2, 1 / 3]}
              sx={{ margin: 'auto' }}
              as="form"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              p={3}
            >
              <Flex mx={-2} mb={3}>
                <Box width={1} px={2}>
                  <Label htmlFor="name">Email</Label>
                  <Input
                    id="name"
                    name="name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
              </Flex>
              <Flex mx={-2} mb={3}>
                <Box width={1} px={2}>
                  <Label htmlFor="pass">Password</Label>
                  <Input
                    type="password"
                    id="pass"
                    name="pass"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </Box>
              </Flex>
              <Flex mx={-2} flexWrap="wrap">
                <Box px={2} ml="auto">
                  <Button sx={{ bg: '#07c' }}>Login</Button>
                </Box>
              </Flex>
            </Box>
          </>
        )
      )}
    </>
  );
};

export default Admin;
