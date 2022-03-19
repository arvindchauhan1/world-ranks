import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import DetailsPage from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';

const App = () => {
  return (
    <><div className="lg:px-28 md:px-16 sm:px-12 px-6 bg-slate-50">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:country' element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
    </>
  );
};

export default App;