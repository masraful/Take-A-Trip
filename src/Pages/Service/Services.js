import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitele';
import ServicesItems from './ServicesItems';

const Services = () => {
    useTitle('Home')

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`https://treval-server-l7liumtab-masraful.vercel.app/services`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 mt-4'>
                {
                    items.map(s => <ServicesItems key={s._id} s={s}></ServicesItems>)
                }


            </div>
            <div className='grid justify-items-center my-5'>
                <Link to='/items' className='btn btn-outline btn-warning'>MORE TRIP...</Link>
            </div>
        </div>
    );
};

export default Services;