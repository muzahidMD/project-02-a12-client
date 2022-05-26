import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    return (
        <div>
            <h1>This Product Detail page</h1>
        </div>
    );
};

export default ProductDetail;