import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    console.log(orders)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user]);

    return (
        <div>
            <h3 className='text-center text-2xl mt-2'>My Orders: {orders.length}</h3>
        </div>
    );
};

export default MyOrders;