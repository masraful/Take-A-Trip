import React from 'react';

import './Banner.css'

const BannerItems = ({ slide }) => {
    const { image, id } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-7 top-1/2">
                <div>
                    <h1 className='text-6xl font-bold text-white'>
                        Experience The Wonder
                    </h1>
                    <p className='text-2xl text-white'>People Don’t Take Trips, Trips Take People</p>
                </div>
            </div>

            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                {/* <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button> */}
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

            </div>
        </div>
    );
};

export default BannerItems;