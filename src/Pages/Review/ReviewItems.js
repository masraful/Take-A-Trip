import React from 'react';

const ReviewItems = ({ r }) => {
    const { review } = r
    return (
        <div>
            <h1 className='text-2xl border my-3 p-3'>{review}</h1>
        </div>
    );
};

export default ReviewItems;