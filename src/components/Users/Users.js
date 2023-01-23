import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Pagination from './Pagination';
import SingleUser from './SingleUser';

const Users = () => {
    const [users, setUsers] = useState([])
    const a = users.slice(0,3)
    const [pageData, setPageData] = useState(a)
    const [size, setSize] = useState(0)
    const [firstIndex, setFirstIndex] = useState(0)
    const [lastIndex, setlastIndex] = useState(3)
    let sizeArr = []

    for (let i = 0; i < size; i++) {
        sizeArr.push(i)

    }


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => {

                setUsers(data)
                setPageData(data?.slice(firstIndex, lastIndex ))
                setSize(Math.ceil(data?.length / 3))
            })
    }, [size,firstIndex,lastIndex])

    const loadData = (startIndex, endIndex)=>{
        // console.log('====================================');
        // console.log(startIndex, endIndex);
        // console.log('====================================');
        // setFirstIndex(startIndex)
        // setlastIndex(endIndex)
        const limitedUsers = users?.slice(startIndex, endIndex )
        setPageData(limitedUsers)
    }

    return (
        <div>
            {
                pageData.map(user => <SingleUser
                    key={user?.id}
                    user={user}
                ></SingleUser>)
            }
            <div>
                {
                sizeArr.map((page,i) => <button 
                className='border border-[#ff4d46] py-1 px-3 rounded mx-4'
                    key={i}
                    onClick = {()=>loadData(page * firstIndex ,  3 * lastIndex)}
                    >{page + 1}</button> )
                }
            </div>
        </div>
    );
};

export default Users;