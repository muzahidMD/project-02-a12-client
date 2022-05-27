import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import './css/Banner.css'


const Banner = () => {

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${'https://i.ibb.co/8BQ7gQr/slider.jpg'})` }}>
            <div style={{}} className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center 'text-neutral-content' text-white">
                <div className="">
                    <h1 className="text-5xl font-bold banner-title">Welcome to <span className='text-secondary'>Baker Manufacturer</span></h1>
                    <h1 style={{ fontFamily: 'Tinos' }} className="mb-5 text-5xl font-bold uppercase "><span className='text-secondary'>The Best</span> Automotive Parts Shop</h1>
                    <p className="mb-5 max-w-md mx-auto text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Explore Now</PrimaryButton>
                </div>
            </div>
        </div >
    );
};

export default Banner;