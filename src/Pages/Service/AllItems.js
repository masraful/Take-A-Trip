import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/UseTitele';
import AllTrip from './AllTrip';


const AllItems = () => {
    useTitle('Service')
    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`https://treval-server-l7liumtab-masraful.vercel.app/items`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4'>
            {
                service.map(trip => <AllTrip key={trip._id} trip={trip}></AllTrip>)
            }
        </div>
    );
};

export default AllItems;