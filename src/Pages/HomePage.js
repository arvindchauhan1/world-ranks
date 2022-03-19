import React, { useState, useCallback, useEffect } from 'react';
import { http } from '../remote';

const HomePage = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchCountries = useCallback(async () => {
        const resp = await http.get(`all`)
        console.log(resp)
        await setCountries(resp.data === null ? [] : resp.data)
        setLoading(false)
    }, [setCountries, setLoading])

    useEffect(async () => {
        fetchCountries();
    }, [fetchCountries])

    return <>
        <div className="flex sm:flex-row flex-col justify-between space-y-5 sm:space-y-0 text-gray-500">
            <div className="text-base font-medium">
                Found&nbsp;{countries.length}&nbsp;countries
            </div>
            <div className="flex w-1/2 justify-items-start h-12 content-cente relative">
                <span className='absolute h-full w-10 flex align-middle justify-center' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <input className='w-full p-4 pl-10 bg-gray-100 rounded-lg' placeholder='Filter by Name, Region, Subregion' type='text' />
            </div>
        </div>
        <div className='container mt-12 w-full '>
            <div className='w-full flex flex-row text-center text-gray-500 mb-6 opacity-60'>
                <div className='flex-1 text-base font-medium'>Name</div>
                <div className='flex-1 text-base font-medium'>Population</div>
                <div className='flex-1 text-base font-medium'>Area (km  )</div>
                <div className='flex-1 text-base font-medium'>Gini</div>
            </div>
            {countries.map((country, index) => {
                console.log(country)
                return (
                    <div className='bg-white w-full flex my-3 p-3 rounded-xl text-center'>
                        <div className='flex-none'>
                        <img src={`${country.flags.svg}`} alt={`${country.flag}`} className='inline-block w-14 h-9' />
                        </div>
                        <div className='flex-1 -ml-14'>{country.name.common}</div>
                        <div className='flex-1'> {country.population}</div>
                        <div className='flex-1'>{country.area}</div>
                        <div className='flex-1'>gini</div>
                    </div>
                )
            })}
        </div>
    </>;
};

export default HomePage;
