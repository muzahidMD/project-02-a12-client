import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const { _id, name, price, description, img, minimumOrder, available } = product;
    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            name: user.displayName,
            email: user.email
        }
    });

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);

    const handleOrderSubmit = data => {
        console.log(data);
    };

    return (
        <div className='px-16 flex-row lg:flex lg:justify-around '>
            <div className="w-3/5 bg-base-100 shadow-xl">
                <div className="px-10 pt-10 flex justify-center">
                    <img src={img} alt="" className="rounded-xl" />
                </div>
                <div className="card-body  ">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p><strong>Price:</strong> ${price}</p>
                    <div className='flex justify-between w-full'>
                        <p>Quantity: <span className='font-bold'>{available}</span></p>
                        <p> Minimum Order: <span className='font-bold'>{minimumOrder}</span></p>
                    </div>
                    <div className=' q mt-10'>
                        <h2 className='text-2xl text-center text-secondary mb-3'>Order Now</h2>
                        <form className='w-1/2 mx-auto' onSubmit={handleSubmit(handleOrderSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" disabled className="input input-bordered w-full max-w-xs"
                                    {...register("name", { required: true })}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" disabled className="input input-bordered w-full max-w-xs"
                                    {...register("email", { required: true })}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" className="input input-bordered w-full max-w-xs"
                                    {...register("address",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Address is required'
                                            }
                                        })
                                    }
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.address.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Number</span>
                                </label>
                                <input type="number" className="input input-bordered w-full max-w-xs"
                                    {...register("number",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Number is required'
                                            }
                                        })
                                    }
                                />
                                <label className="label">
                                    {errors.number?.type === 'required' && <span className="label-text-alt text-red-600">{errors.number.message}</span>}
                                </label>
                            </div>

                            <input type="submit" className='btn w-full max-w-xs hover:bg-white hover:text-black bg-secondary text-white rounded-full my-4' value={"Order Now"} />
                        </form>
                    </div>
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
        //                     <input className='w-100 d-block mx-auto' style={{ backgroundColor: "#00896F", color: "#ffffff" }} type="submit"          value="Restock" />
        //                 </form>
        //             </div>
        //         </Card.Body>
        //     </Card>
        // </div>
    );
};

export default Purchase;