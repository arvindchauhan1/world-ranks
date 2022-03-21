import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const orderBy = (countries, value, direction) => {
    if (direction === "asc") {
        return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }

    if (direction === "desc") {
        return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }

    return countries;
};

const SortArrow = ({ direction }) => {
    if (!direction) {
        return <></>;
    }

    if (direction === "desc") {
        return (
            <span className={` m-0`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </span >
        );
    } else {
        return (
            <span className={` `}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
        );
    }
};

const CountriesTable = ({ countries }) => {
    const [show, setShow] = useState('0')

    const [direction, setDirection] = useState();
    const [value, setValue] = useState();

    const orderedCountries = orderBy(countries, value, direction);

    const switchDirection = () => {
        if (!direction) {
            setDirection("desc");
        } else if (direction === "desc") {
            setDirection("asc");
        } else {
            setDirection(null);
        }
    };

    const setValueAndDirection = (value) => {
        switchDirection();
        setValue(value);
    };

    return (
        <div className='container mt-12 w-full '>
            <div className='w-full flex flex-row text-center text-gray-500 mb-6 opacity-60 my-3 p-3'>
                <div className='sm:block flex-none w-14 h-9 hidden'></div>
                <button className='flex-1 text-base font-medium ' onClick={() => setValueAndDirection("name")}>
                    <span>Name</span>
                    {value === "name" && <SortArrow direction={direction} />}
                </button>
                <button className='flex-1 sm:block hidden text-base font-medium'>Population</button>
                <button className='flex-1 sm:block hidden text-base font-medium'>Area (km  )</button>
                <button className='flex-1 sm:block hidden text-base font-medium'>Gini</button>
                <div className='flex-1 sm:hidden block text-base font-medium'>
                    <select defaultValue={show} onChange={(e) => setShow(e.target.value)}>
                        <option value="0" className='text-base font-medium'>Population</option>
                        <option value="1" className='text-base font-medium'>Area (km  )</option>
                        <option value="2" className='text-base font-medium'>Gini</option>
                    </select>
                </div>
            </div>
            {countries.map((country, index) => {
                return (
                    <Link key={index} to={`${country.name.common}`}>
                        <div className='bg-white w-full flex my-3 p-3 rounded-xl text-center hover:-translate-y-1 transition-transform ease-in'>
                            <div className='flex-none sm:block hidden'>
                                <img src={`${country.flags.svg}`} alt={`${country.flag}`} className='inline-block w-14 h-9 rounded-md object-cover' />
                            </div>
                            <div className='flex-1 text-base font-medium'>{country.name.common}</div>
                            <div className={`flex-1 text-base font-medium sm:block ${show === '0' ? '' : 'hidden'} `}> {country.population}</div>
                            <div className={`flex-1 text-base font-medium sm:block ${show === '1' ? '' : 'hidden'} `}>{country.area}</div>
                            <div className={`flex-1 text-base font-medium sm:block ${show === '2' ? '' : 'hidden'} `}>gini</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default CountriesTable