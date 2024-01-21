import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';

import Users from './user/pages/Users';
import './App.css';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/navigation/MainNavigation';
import SideDrawer from './shared/navigation/SideDrawer';
import NewPlace from './places/pages/NewPlace';

function App() {
  const userId = useParams();

  return (
    <Router>
      <MainNavigation className='hidden invisible md:block md:visible' />
      <SideDrawer className='block visible md:hidden md:invisible' />
      <main>
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/:userId/places' element={<UserPlaces />} />
          <Route path='/:userId/places/new' element={<NewPlace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
