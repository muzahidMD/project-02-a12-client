import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><Link className='btn bg-white text-black hover:bg-red-600 hover:text-white border-none' to={'/'}>Home</Link></li>
        {/* <li><Link className='btn bg-white text-black hover:bg-red-600 hover:text-white border-none' to={'/blog'}>Blog</Link></li> */}
        <li><Link className='btn bg-white text-black hover:bg-red-600 hover:text-white border-none' to={'/portfolio'}>Portfolio</Link></li>
        {
            user && <li><Link className='btn bg-white text-black hover:bg-red-600 hover:text-white border-none' to={'/dashboard'}>Dashboard</Link></li>
        }

        <li>{user ? <button onClick={logout} className="btn bg-white text-black hover:bg-red-600 hover:text-white rounded-full">Sign out</button> : <Link to={'/login'} className="btn bg-white text-black hover:bg-red-600 hover:text-white rounded-full" >Login</Link>}</li>
    </>

    return (
        <div className="navbar bg-white sticky top-0 z-50 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Baker Manufacturer</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end'>
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;