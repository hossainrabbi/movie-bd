import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar/NavBar';

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
