import React from 'react';
import './Items.css'
import img from '../../assets/banner/pexels-baihaki-hine-4314203 (1).jpg'
const Items = () => {

    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='"row-span-3'>
                <img src={img} alt="" />
            </div>
            <div className='grid grid-cols-1 gap-4'>
                <div className=''>
                    <img className='col-span-2' src={img} alt="" />
                </div>

                <div>
                    <img className='col-span-2' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Items;