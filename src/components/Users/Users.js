import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    console.log(users);



    //delete user
    const handelUserDelete = id => {
        const proceed = window.confirm('Are You Sure You Want TO delete?');
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount !== 0) {
                        alert('delete sucessfull');
                        const remainUsers = users.filter(user => user._id !== id);
                        setUsers(remainUsers);
                    }
                })
        }
    }
    return (
        <div>
            <h2>Total Users:{users.length}</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}>{user.name} || {user.email}
                        <button onClick={() => handelUserDelete(user._id)}>X</button>
                        <Link to={`/users/update/${user._id}`}><button>Update</button></Link>

                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;