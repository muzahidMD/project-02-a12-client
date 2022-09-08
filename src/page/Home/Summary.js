import { faFlag, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {
    return (
        <div className='py-20'>
            <h2 className='text-4xl text-secondary text-center uppercase font-bold'>Millions Business Trust Us</h2>
            <h2 className='text-xl text-secondary text-center uppercase font-bold mt-10 mb-0'>We are highly care our clients!</h2>
            <div className="stats shadow my-5 w-3/4 lg:mx-48 py-20">
                <div className="stat ">
                    <div className="stat-figure text-secondary">
                        <FontAwesomeIcon icon={faFlag} className='text-4xl'></FontAwesomeIcon>
                    </div>
                    <div className="stat-title text-xl mb-6">Countries</div>
                    <div className="stat-value">67</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FontAwesomeIcon icon={faUsers} className='text-4xl'></FontAwesomeIcon>
                    </div>
                    <div className="stat-title text-xl mb-6">Happy client</div>
                    <div className="stat-value">4,200+</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FontAwesomeIcon icon={faStar} className='text-4xl'></FontAwesomeIcon>
                    </div>
                    <div className="stat-title text-xl mb-6">Reviews</div>
                    <div className="stat-value">1,200+</div>
                </div>
            </div>

            {/* <div>
                <div className="flex flex-row-reverse justify-between items-center p-8 w-80 border border-left">
                    <div className="    text-secondary">
                        <FontAwesomeIcon icon={faFlag} className='text-4xl'></FontAwesomeIcon>
                    </div>
                    <div>
                        <p className="stat-title text-xl mb-6">Countries</p>
                        <p className="font-extrabold text-5xl">67</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Summary;