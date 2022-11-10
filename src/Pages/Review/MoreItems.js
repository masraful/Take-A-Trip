import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitele';
import ReviewItems from './ReviewItems';

const MoreItems = () => {
    const [review, setReview] = useState([])
    const data = useLoaderData();
    const { img, title, price, description } = data;
    useTitle('Review')
    const handlReview = event => {
        event.preventDefault()
        const form = event.target;
        const review = form.review.value;
        form.reset()
        console.log(review)
        fetch('https://treval-server-l7liumtab-masraful.vercel.app/allreview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ review }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))


    }
    useEffect(() => {
        fetch(`http://localhost:5000/allreview`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [review])
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-5'>Service Detalis</h2>
            <div className="lg:w-1/2 sm:w-full lg:mx-auto">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl mx-auto" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Trip: {title}</h2>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>{description}</p>

                    <div className="card-actions justify-between">
                        <div className="btn btn-outline btn-warning">price: ${price}</div>
                        {/* <Link to="/costomer" className="btn btn-primary">Review</Link> */}
                    </div>

                    <div className='w-full'>
                        <h2 className='text-5xl font-bold text-center my-5'>All Review</h2>
                        {
                            review.map(r => <ReviewItems key={r._id} r={r}></ReviewItems>)
                        }
                        <form onSubmit={handlReview} className="card-body">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Comment</span>
                                </label>
                                <textarea className="textarea textarea-bordered" name='review' placeholder="Describe Your Experience..."></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline btn-warning" type="submit" value="Add Review" />
                            </div>
                        </form>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default MoreItems;