import React from 'react';
import { Link } from 'react-router-dom';

const ServicesItems = ({ s }) => {
    const { title, img, description, price, _id } = s;
    return (

        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        {/* <div className="badge badge-secondary"></div> */}
                    </h2>
                    <p>{description.slice(0, 150)}</p>
                    <div className="card-actions justify-between">
                        <div className="btn btn-outline btn-warning">Price: ${price}</div>
                        <Link to={`/review/${_id}`}>
                            <div className="btn btn-primary">Learn more!</div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ServicesItems;