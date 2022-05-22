import React from 'react';
import slider from '../../images/slider.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${slider})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center 'text-neutral-content' text-white">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold uppercase italic ">Welcome to our Store</h1>
                    <h1 className="mb-5 text-5xl font-bold uppercase "><span className='text-red-600'>The Best</span> Automotive Parts Shop</h1>
                    <p className="mb-5 max-w-md mx-auto text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-white text-black hover:bg-red-600 hover:text-white rounded-full">Explore Now</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;