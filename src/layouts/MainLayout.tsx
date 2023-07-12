import { Outlet } from 'react-router-dom';

import { Navbar } from './Navbar';

export const MainLayout = () => (
  <div>
    <Navbar />
    <div className="pt-16">
      <Outlet />
    </div>
  </div>
);
