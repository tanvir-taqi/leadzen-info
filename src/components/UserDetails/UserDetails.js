import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Modecontext } from '../../Context/ModeContext';

const UserDetails = () => {
    const details = useLoaderData()
    const {isDark} = useContext(Modecontext)
    const { name, company, address,phone,email, } = details
    
    return (
        <div>
            <div className={`w-full flex flex-col justify-center items-center ${isDark ? 'text-white bg-gray-700 ' : 'text-black bg-gray-100 '} `}>
                <div className={`px-2 grid grid-cols-2 md:grid-cols-5 gap-6  md:w-2/3 my-4 py-2 shadow-lg ${isDark ? 'shadow-gray-600' : 'shadow-gray-200'} items-center justify-center  `}>
                    <h4>{company?.name}</h4>
                    <div>
                        <h4 className='font-semibold text-base'>Contact</h4>
                        <p className='text-sm font-normal  tracking-wide'>{name}</p>
                    </div>
                    <div>
                        <h4 className='font-semibold text-base'>City</h4>
                        <p className='text-sm font-normal  tracking-wide'>{address?.city}</p>
                    </div>
                    <div>
                        <h4 className='font-semibold text-base'>Street</h4>
                        <p className='text-sm font-normal tracking-wide'>{address?.street}</p>
                    </div>
                    <Link to={`/`}>
                        <button className='bg-[#ff4d46] px-4 py-1 rounded-2xl text-xs font-semibold text-white'>Hide Details</button>
                    </Link>

                </div>
                <div className='md:w-1/2 py-12'>

                <div>
                <div className="flex flex-col justify-start items-start pb-8">
                            <h4 className='font-bold text-base'>Description</h4>
                            <p className='text-sm font-normal text-start tracking-wide'>
                                {company?.name} provides services like {company?.bs}. Our slog is {company?.catchPhrase}. Contact {name} at {email} to get more information.</p>

                        </div>
                </div>

                    <div className='grid grid-cols-2 justify-center items-center gap-8'>

                        <div className="flex flex-col items-start">
                            <h4 className='font-semibold text-base'>Contact Person</h4>
                            <p className='text-sm font-normal  tracking-wide'>{name}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h4 className='font-semibold text-base'>Address</h4>
                            <p className='text-sm font-normal  tracking-wide'>{address?.street},{address?.city},{address?.zipcode}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h4 className='font-semibold text-base'>Company</h4>
                            <p className='text-sm font-normal  tracking-wide'>{company?.name}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h4 className='font-semibold text-base'>Suite</h4>
                            <p className='text-sm font-normal  tracking-wide'>{address?.suite}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h4 className='font-semibold text-base'>Email</h4>
                            <p className='text-sm font-normal  tracking-wide'>{email}</p>
                        </div>
                        <div className="flex flex-col items-start">
                        <h4 className='font-semibold text-base'>Street</h4>
                        <p className='text-sm font-normal  tracking-wide'>{address?.street}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <h4 className='font-semibold text-base'>Phone</h4>
                            <p className='text-sm font-normal  tracking-wide'>{phone}</p>
                        </div>
                       
                        <div className="flex flex-col items-start">
                            <h4 className='font-semibold text-base'>City</h4>
                            <p className='text-sm font-normal  tracking-wide'>{address?.city}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;