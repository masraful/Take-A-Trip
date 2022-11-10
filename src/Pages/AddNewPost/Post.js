import React, { useEffect, useState } from 'react';
import NewPost from './NewPost';

const Post = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch(`https://treval-server-l7liumtab-masraful.vercel.app/newservice`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div className='mt-7'>
            <h2 className='text-5xl font-bold text-center'>New Service</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 my-8'>
                {
                    post.map(p => <NewPost key={p._id} p={p}></NewPost>)
                }
            </div>
        </div>
    );
};

export default Post;