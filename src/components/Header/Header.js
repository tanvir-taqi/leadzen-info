import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Modecontext } from '../../Context/ModeContext';

const Header = () => {
    const { setIsDark, isDark } = useContext(Modecontext)
    return (
        <div className={`py-4 flex justify-around items-center bg-gray-100 mb-10 ${isDark ? 'text-white bg-gray-800 ' : 'text-black bg-gray-100 '}`}>
            <Link to='/' className='font-extrabold text-xl tracking-wider'>Leadzen Info</Link>
            <div className={`${isDark ?   'text-white font-bold'  :'text-black font-bold'} `} >
                <button onClick={()=>setIsDark(!isDark)}>
                    {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
};

export default Header;