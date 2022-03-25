import React, { useCallback, useState, useEffect } from 'react';
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
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        if (res.ok) return res.json()
      })
      .then((data) => setCountries(data))
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
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