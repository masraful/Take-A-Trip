import React from 'react';
import './Items.css'
import img from '../../assets/banner/pexels-baihaki-hine-4314203 (1).jpg'
const Items = () => {

    return (

        <div className="card lg:card-side bg-base-100 shadow-xl my-5">
            <figure className='w-1/2'><img className='' src={img} alt="Album" /></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title text-5xl text-warning">Traveller</h2>
                <p className='text-xl'>I just love travelling. I am a rider too. I have viseted many place in world. I have a traveller group. We all are friends. We travelled in Hill, Sea Beach, River and other places in Bangladesh. Now we are planning to go to outside of Bangladesh to visit the world. If I can earn a lot of money, I will travell the whole world..</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>

    );
};

export default Items;