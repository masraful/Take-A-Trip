import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/Login/undraw_details_8k13.svg'

const NewService = () => {
    const handleNewService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.image.value;
        const price = form.price.value;
        const description = form.description.value;

        console.log(title, img, price, description)

        const addService = {
            title,
            price,
            img,
            description,
        }
        fetch('http://localhost:5000/newservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('New service added')
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">New Service Add</h1>
                    <form onSubmit={handleNewService} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Title</span>
                            </label>
                            <input type="text" name='title' placeholder="title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" name='image' placeholder="Image Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">price</span>
                            </label>
                            <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name='description' placeholder="description" required></textarea>
                            {/* <input type="text" name='description' placeholder="description" className="input input-bordered" required /> */}

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="ADD SERVICE" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default NewService;