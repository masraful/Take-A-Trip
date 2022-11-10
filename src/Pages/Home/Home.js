import React from 'react';
import Post from '../AddNewPost/Post';
import Banner from '../Banner/Banner';

import Items from '../Items/Items';
import Services from '../Service/Services';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Services></Services>
            <Post></Post>

        </div>
    );
};

export default Home;