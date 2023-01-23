import React, { useContext, useEffect, useState } from 'react';
import { Modecontext } from '../../Context/ModeContext';
import SingleUser from './SingleUser';

const Users = () => {
    const {isDark} = useContext(Modecontext)
    const [users, setUsers] = useState([])
    const a = users?.slice(0,3)
    const [pageData, setPageData] = useState(a)
    const [size, setSize] = useState(0)
    let sizeArr = []

    for (let i = 0; i < size; i++) {
        sizeArr.push(i)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => {

                setUsers(data)
                setPageData(data?.slice(0, 3 ))
                setSize(Math.ceil(data?.length / 3))
            })
    }, [])

    const loadData = (startIndex, endIndex)=>{
        const limitedUsers = users?.slice(startIndex, endIndex )
        setPageData(limitedUsers)
    }

    return (
        <div className={`${isDark ? 'text-white bg-gray-700 ' : 'text-black bg-gray-100 '}`}>
            {
                pageData.map(user => <SingleUser
                    key={user?.id}
                    user={user}
                ></SingleUser>)
            }
            <div className=' w-full flex justify-center items-center my-8'>
                <div className='flex mx-4 md:w-1/4'>                
                {
                sizeArr.map((page,i) => <button 
                className='border border-[#ff4d46]  hover:bg-[#ff4c46d2] hover:text-white py-1 px-3 rounded mx-4'
                    key={i}
                    onClick = {()=>loadData(page * 3 ,  3 + 3 * page)}
                    >{page + 1}</button> )
                }
                </div>
            </div>
        </div>
    );
};

export default Users;