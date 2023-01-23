import React from 'react';
import { Link } from 'react-router-dom';

const SingleUser = ({ user }) => {
    const { id, name, address, company } = user
    return (
        <div className='w-full flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-6  w-2/3 my-4 py-2 shadow-lg shadow-gray-200 items-center justify-center  '>
            <h4>{company?.name}</h4>
            <div>
                <h4 className='font-semibold text-base'>Contact</h4>
                <p className='text-sm font-normal text-black tracking-wide'>{name}</p>
            </div>
            <div>
                <h4 className='font-semibold text-base'>City</h4>
                <p className='text-sm font-normal text-black tracking-wide'>{address?.city}</p>
            </div>
            <div>
                <h4 className='font-semibold text-base'>Street</h4>
                <p className='text-sm font-normal text-black tracking-wide'>{address?.street}</p>
            </div>
            <Link to={`/user/${id}`}>
                <button className='bg-[#ff4d46] px-4 py-1 rounded-2xl text-xs font-semibold text-white'>View Details</button>
            </Link>

        </div>
    </div>
    );
};

export default SingleUser;