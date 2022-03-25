import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar';


const orderBy = (countries, value, direction) => {
    if (direction === "asc") {
        if (value === 'name') return [...countries].sort((a, b) => (a[value].common > b[value].common ? 1 : -1));
        if (value === 'gini') return [...countries].sort((a, b) => {
            if (a[value] === undefined) {
                return 1
            }
            if (b[value] === undefined) {
                return -1
            }
            return Object.values(a[value])[0] > Object.values(b[value])[0] ? 1 : -1
        })
        return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }

    if (direction === "desc") {
        if (value === 'name') return [...countries].sort((a, b) => (a[value].common > b[value].common ? -1 : 1));
        if (value === 'gini') return [...countries].sort((a, b) => {
            if (a[value] === undefined) {
                return 1
            }
            if (b[value] === undefined) {
                return -1
            }
            return Object.values(a[value])[0] > Object.values(b[value])[0] ? -1 : 1
        })
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
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-4 ml-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </span >
        );
    } else {
        return (
            <span>

                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-4 ml-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </span>
        );
    }
};

const CountriesTable = ({ countries }) => {

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
        <div className='w-full mt-12 mb-16 '>
            <div className='w-full flex flex-row text-center text-gray-500 mb-6 opacity-60 my-3 p-3'>
                <div className='sm:block flex-none w-14 h-9 hidden'></div>
                <button
                    className='flex-1 text-base font-medium text-left ml-6 sm:m-0 sm:text-center'
                    onClick={() => setValueAndDirection("name")}
                >
                    Name
                    {value === "name" && <SortArrow direction={direction} />}
                </button>
                <button
                    className='flex-1 text-base font-medium'
                    onClick={() => setValueAndDirection("population")}>
                    Population
                    {value === "population" && <SortArrow direction={direction} />}
                </button>
                <button
                    className='flex-1 sm:block hidden text-base font-medium'
                    onClick={() => setValueAndDirection("area")}
                >
                    Area (km  )
                    {value === "area" && <SortArrow direction={direction} />}
                </button>
                <button
                    className='flex-1 sm:block hidden text-base font-medium'
                    onClick={() => setValueAndDirection("gini")}
                >
                    Gini
                    {value === "gini" && <SortArrow direction={direction} />}
                </button>
            </div>
            {orderedCountries.map((country, index) => {

                return (
                    <Link key={index} to={`${country.name.common}`}>
                        <div className='bg-white w-full flex my-3 p-3 rounded-xl text-center hover:-translate-y-0.5 transition-all ease-in hover:shadow-md'>
                            <div className='flex-none sm:block hidden '>
                                <img src={`${country.flags.svg}`} alt={`${country.flag}`} className='inline-block w-14 h-9 rounded-md object-cover' />
                            </div>
                            <div className='flex-1 text-base font-medium ml-6 sm:m-0 flex justify-start sm:justify-center items-center'>{country.name.common}</div>
                            <div className={`flex-1 text-base font-medium flex justify-center items-center`}> {country.population}</div>
                            <div className={`flex-1 hidden sm:flex justify-center items-center text-base font-medium `}>{country.area}</div>
                            <div className={`flex-1 hidden sm:flex justify-center items-center text-base font-medium`}>
                                <ProgressBar value={country.gini !== undefined ? Object.values(country.gini)[0] : null} />
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default CountriesTable