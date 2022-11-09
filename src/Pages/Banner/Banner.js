import React from 'react';
import img4 from '../../assets/banner/pexels-aleksandar-pasaric-2434627 (1).jpg';
import img2 from '../../assets/banner/pexels-baihaki-hine-4314203 (1).jpg';
import img3 from '../../assets/banner/pexels-connor-slade-2943312 (1).jpg';
import img1 from '../../assets/banner/pexels-j-surianto-10429916 (1).jpg'
import BannerItems from './BannerItems';
const Banner = () => {
    const bannerimg = [
        {
            image: img1,
            id: 1
        },
        {
            image: img2,
            id: 2
        },
        {
            image: img3,
            id: 3
        },
        {
            image: img4,
            id: 4
        },
    ]
    return (
        <div className="carousel w-full py-10">
            {
                bannerimg.map(slide => <BannerItems
                    key={slide.id}
                    slide={slide}
                ></BannerItems>)
            }
        </div>
    );
};

export default Banner;