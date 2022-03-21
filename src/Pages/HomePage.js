import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountriesTable from '../components/CountriesTable';

const HomePage = ({ countries }) => {
    const [keyword, setKeyword] = useState('')

    const filteredCountries = countries.filter(country => country.subregion === undefined ? false : country.subregion.toLowerCase().includes(keyword) || country.name.common.toLowerCase().includes(keyword) || country.region.toLowerCase().includes(keyword));

    return <>
        <div className="flex sm:flex-row flex-col justify-between space-y-5 sm:space-y-0 text-gray-500 mt-1">
            <div className="text-base font-medium">
                Found&nbsp;{filteredCountries.length}&nbsp;countries
            </div>
            <div className="flex sm:w-1/2 w-full  justify-items-start h-12 content-cente relative">
                <span className='absolute h-full w-10 flex align-middle justify-center' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <input className='w-full p-4 pl-10 bg-gray-100 rounded-xl' placeholder='Filter by Name, Region, Subregion' type='text' value={keyword} onChange={(e) => setKeyword(e.target.value.toLowerCase())} />
            </div>
        </div>
        <CountriesTable countries={filteredCountries} />
    </>;
};

export default HomePage;
