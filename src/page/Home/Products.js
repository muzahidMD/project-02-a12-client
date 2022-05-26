import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useProducts();

    return (
        <div className='my-8 px-12'>
            <h2 className='text-4xl text-secondary text-center uppercase font-bold'>Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;