import React from 'react';

const NewPost = ({ p }) => {
    const { title, img, description, price } = p;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description.slice(0, 150)}</p>
                <div className="card-actions justify-between">
                    <div className="btn btn-outline btn-warning">Price: ${price}</div>
                    <div className="btn btn-primary">Learn more!</div>
                </div>
            </div>
        </div>
    );
};

export default NewPost;