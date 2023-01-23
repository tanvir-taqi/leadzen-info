import React, { useContext } from 'react';
import { Modecontext } from '../../Context/ModeContext';
import Users from '../Users/Users';

const Home = () => {
    const {isDark} = useContext(Modecontext)
    return (
        <div className={`${isDark ? 'text-white bg-gray-700 ' : 'text-black bg-gray-100 '}`}>
            <Users></Users>
        </div>
    );
};

export default Home;