import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
