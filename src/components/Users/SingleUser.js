import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Modecontext } from '../../Context/ModeContext';

const SingleUser = ({ user }) => {
    const { id, name, address, company } = user
    const {isDark} = useContext(Modecontext)
    return (
        <div className={`${isDark ? 'text-white bg-gray-700 ' : 'text-black bg-gray-100 '} w-full flex justify-center items-center`}>
        <div className={`px-2 grid grid-cols-1 md:grid-cols-5 gap-6  w-2/3 my-4 py-2 shadow-lg ${isDark ? 'shadow-gray-600' : 'shadow-gray-200'} items-center justify-center  `}>
            <h4>{company?.name}</h4>
            <div>
                <h4 className='font-semibold text-base'>Contact</h4>
                <p className='text-sm font-normal tracking-wide'>{name}</p>
            </div>
            <div>
                <h4 className='font-semibold text-base'>City</h4>
                <p className='text-sm font-normal tracking-wide'>{address?.city}</p>
            </div>
            <div>
                <h4 className='font-semibold text-base'>Street</h4>
                <p className='text-sm font-normal tracking-wide'>{address?.street}</p>
            </div>
            <Link to={`/user/${id}`}>
                <button className='bg-[#ff4d46] px-4 py-1 rounded-2xl text-xs font-semibold text-white'>View Details</button>
            </Link>

        </div>
    </div>
    );
};

export default SingleUser;