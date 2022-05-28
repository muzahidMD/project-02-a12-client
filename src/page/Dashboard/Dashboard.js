import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  justify-center">
                <h2 className='text-3xl font-bold text-center text-secondary'>Welcome to your Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu  p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link className='btn bg-white text-black hover:bg-red-600 hover:text-white border-none' to={'/dashboard'}>My Order</Link></li>
                    <li><Link className='btn bg-white text-black hover:bg-red-600 hover:text-white border-none' to={'/dashboard/myreview'}>My Review</Link></li>
                    <li><Link className='btn bg-white text-black hover:bg-red-600 hover:text-white border-none' to={'/dashboard/myprofile'}>My Profile</Link></li>
                    <li><Link className='btn bg-white text-black hover:bg-red-600 hover:text-white border-none' to={'/dashboard/users'}>All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;