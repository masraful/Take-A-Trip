import React from 'react';
import { Link } from 'react-router-dom';

const AllTrip = ({ trip }) => {
    const { title, img, description, price, _id } = trip

    return (
        <div className="card w-96 h-3/4 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description.slice(0, 200)}</p>
                <div className="card-actions justify-between">
                    <div className="btn btn-outline btn-warning">Price: ${price}</div>
                    <Link to={`/allservice/${_id}`} className='btn btn-primary'>Learn more!</Link>
                    {/* <div className="btn btn-primary">Learn more!</div> */}
                </div>
            </div>
        </div>
    );
};

export default AllTrip;