import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Product = ({ product }) => {
    const { _id, name, price, description, img, quantity } = product;

    return (
        <div className=''>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p><strong>Price:</strong> ${price}</p>
                    <div className='flex justify-between w-full'>
                        <p><small><strong>Quantity:</strong> { }</small></p>
                        <p><small><strong> Minimum Order: </strong> {quantity} </small></p>
                    </div>
                    <div className="card-actions justify-center mt-3">
                        <button className="btn bg-white text-black hover:bg-red-600 hover:text-white rounded-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;