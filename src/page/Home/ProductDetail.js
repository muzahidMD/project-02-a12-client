import React, { useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const { _id, name, price, description, img, supplierName, quantity } = product;

    useEffect(() => {
        const url = `https://fast-sierra-37608.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handleDeliverBtn = () => {

    }

    return (
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
                    <button onClick={handleDeliverBtn} className="btn bg-white text-black hover:bg-red-600 hover:text-white rounded-full">Buy Now</button>
                </div>
            </div>
        </div>
        // <div>
        //     <h2 className='page-title'> Product Details</h2>
        //     <Card className='mx-auto' style={{ width: '25%', border: '1px solid #00896F' }}>
        //         <Card.Img variant="top" src={img} />
        //         <Card.Body>
        //             <Card.Title> <strong> <i>{name}</i> </strong> </Card.Title>
        //             <Card.Text>
        //                 {description}
        //             </Card.Text>
        //             <Card.Text>
        //                 <strong>Price:</strong> ${price}
        //                 <div className='d-flex align-items-center justify-content-between'>
        //                     <p><small><strong>Supplier:</strong> {supplierName}</small></p>
        //                     <p><small><strong> Quantity:</strong> {quantity} </small></p>
        //                 </div>
        //             </Card.Text>
        //             <div >
        //                 <form>
        //                     <button
        //                         onClick={handleDeliverBtn}
        //                         className='text-light my-3 w-100 d-block mx-auto py-2 rounded-3 border-0'
        //                         style={{ backgroundColor: '#00896F' }}
        //                     >
        //                         <span className='px-3'>Deliver</span>
        //                     </button>
        //                     <input type="text" name="" placeholder='Enter Stock' id="" />
        //                     <input className='w-100 d-block mx-auto' style={{ backgroundColor: "#00896F", color: "#ffffff" }} type="submit" value="Restock" />
        //                 </form>
        //             </div>
        //         </Card.Body>
        //     </Card>
        // </div>
    );
};

export default ProductDetail;