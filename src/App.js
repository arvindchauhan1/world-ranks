import React, { useCallback, useState, useEffect } from 'react';
import { http } from './remote';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import DetailsPage from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';
import Spinner from './components/Spinner';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true)
  const fetchCountries = useCallback(async () => {
    try {
      const resp = await http.get(`all`)
      await setCountries(resp.data === null ? [] : resp.data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }, [setCountries, setLoading])

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries])
  
  return (
    <>
      <>
        <Router>
          <Header />
          {loading ? <Spinner /> :
            <div className="lg:px-28 md:px-16 sm:px-12 px-6 bg-slate-100">
              <Routes>
                <Route path='/' element={<HomePage countries={countries} />} />
                <Route path='/:country' element={<DetailsPage countries={countries} />} />
              </Routes>
            </div>
          }
          <Footer />
        </Router>
      </>
    </>
  );
};

export default App;