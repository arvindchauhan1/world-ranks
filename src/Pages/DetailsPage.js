import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const { country } = useParams()

    return <>
        <div className="h-full ">
            {country} Details Page
        </div>
    </>;
};

export default DetailsPage;
