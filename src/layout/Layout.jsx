import React, { useEffect } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import './Layout.css';

import { onAuthStateChanged } from 'firebase/auth';
import { useAtom } from 'jotai';
import { userAtom } from '../stores/userAtom'; 
import { auth } from '../firebase.config'; 

const Layout = ({ children }) => {

  const [auser, setUser] = useAtom(userAtom);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsub();
  }, [setUser]);

  return (
    <div id="content">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
