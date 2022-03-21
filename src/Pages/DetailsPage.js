import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetailsPage = ({ countries }) => {
    const { country } = useParams()
    const navigate = useNavigate();

    const countryData = countries.filter(c => c.name.common === country)[0];
    const neighbouringCountries = countries.filter(c => countryData.borders !== undefined ? countryData.borders.includes(c.cca3) : false)

    return <>
        <div className="container w-full flex sm:flex-row flex-col text-center">
            <div className='sm:mr-6'>
                <div className="container p-7 bg-white rounded-xl sm:w-80 xl:w-96 mx-auto">
                    <img src={`${countryData.flags !== undefined ? countryData.flags.svg : ""}`} alt={`flag`} className='w-full h-full mx-auto mb-5 rounded-xl object-fill' />
                    <div className='text-center text-3xl font-semibold text-gray-600 sm:text-gray-900 mb-2' >
                        {countryData.name !== undefined ? countryData.name.common : ''}
                    </div>
                    <div className='text-base font-normal text-gray-800 mb-10'>
                        {countryData.region !== undefined ? countryData.region : ''}
                    </div>
                    <div className='flex justify-between font-medium'>
                        <div>
                            <div className='text-base text-gray-800 mb-1'>{countryData.population !== undefined ? countryData.population : ''}</div>
                            <div className='text-sm text-gray-400 mb-5'>Population</div>
                        </div>
                        <div>
                            <div className='text-base text-gray-800 mb-1'>{countryData.area !== undefined ? countryData.area : ''}</div>
                            <div className='text-sm text-gray-400 mb-5'>Area (km  )</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container bg-white sm:ml-6 mt-12 sm:mt-0 rounded-xl text-sm font-medium sm:p-7 sm:px-10 p-7'>
                <div className='text-left text-lg mb-5'>
                    Details
                </div>
                <div className='flex justify-between'>
                    <div className='text-gray-400'>
                        Capital
                    </div>
                    <div className='text-gray-800 text-right'>
                        {countryData.capital !== undefined ? countryData.capital.map((c, i) => (<span key={i}>{`${c}${countryData.capital.length !== i + 1 ? ', ' : ""}`}</span>)) : ''}
                    </div>
                </div>
                <hr className='-mx-7 my-5' />
                {/* break */}
                <div className='flex justify-between'>
                    <div className='text-gray-400'>
                        Subregion
                    </div>
                    <div className='text-gray-800'>
                        {countryData.subregion !== undefined ? countryData.subregion : ''}
                    </div>
                </div>
                <hr className='-mx-7 my-5' />
                {/* break */}
                <div className='flex justify-between'>
                    <div className='text-gray-400'>
                        Languages
                    </div>
                    <div className='text-gray-800'>
                        {countryData.languages !== undefined ? Object.values(countryData.languages).map((l, i) => (<span key={i}>{`${l}${Object.values(countryData.languages).length !== i + 1 ? ', ' : ""}`}</span>)) : ''}
                    </div>
                </div>
                <hr className='-mx-7 my-5' />
                {/* break */}
                <div className='flex justify-between'>
                    <div className='text-gray-400'>
                        Currencies
                    </div>
                    <div className='text-gray-800'>
                        {countryData.currencies !== undefined ? Object.values(countryData.currencies).map((currencies, i) => (<span key={i}>{`${currencies.name} (${currencies.symbol})${Object.values(countryData.currencies).length !== i + 1 ? ', ' : ""}`}</span>)) : ''}
                    </div>
                </div>
                <hr className='-mx-7 my-5' />
                {/* break */}
                <div className='flex justify-between'>
                    <div className='text-gray-400'>
                        Native name
                    </div>
                    <div className='text-gray-800'>
                        {countryData.name !== undefined ? Object.values(countryData.name.nativeName).map((nativeName, i) => (<span key={i}>{`${nativeName.common}${Object.values(countryData.name.nativeName).length !== i + 1 ? ', ' : ""}`}</span>)) : ''}
                    </div>
                </div>
                <hr className='-mx-7 my-5' />
                {/* break */}
                <div className='flex justify-between'>
                    <div className='text-gray-400'>
                        Gini
                    </div>
                    <div className='text-gray-800'>
                        {countryData.name !== undefined ? countryData.name.common : ''}
                    </div>
                </div>
                <hr className='-mx-7 mt-5 mb-12' />
                {/* break */}
                <div className='text-left text-gray-400 mb-6'>
                    Neighbouring Countries
                </div>
                <div className='text-left'>
                    {neighbouringCountries.length !== 0 ? neighbouringCountries.map((c, i) => (
                        <span key={i} className='inline-block mr-7 cursor-pointer hover:-translate-y-1 transition-transform ease-in' onClick={async () => {
                            await navigate({ pathname: `../${c.name !== undefined ? c.name.common : ''}` }, { replace: true })
                        }}>
                            <img src={`${c.flags !== undefined ? c.flags.svg : ""}`} alt={`flag`} className='w-20 h-14 object-fill rounded' />
                            <div className='my-2 text-xs font-normal text-center'>
                                {c.name !== undefined ? c.name.common : ''}
                            </div>
                        </span>
                    )) : ""}
                </div>
            </div>
        </div>
    </>;
};

export default DetailsPage;
