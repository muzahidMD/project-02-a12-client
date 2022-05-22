import React from 'react';
import slid from '../../images/slid-1.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${slid})` }}>
            <div class="hero-overlay bg-opacity-50"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="">
                    <h1 class="mb-5 text-5xl font-bold">Welcome to our Store</h1>
                    <h1 class="mb-5 text-5xl font-bold uppercase"><span className='text-red-500'>The Best</span> Automotive Parts Shop</h1>
                    <p class="mb-5 max-w-md mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn bg-white text-black hover:bg-red-600 hover:text-white rounded-full">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;