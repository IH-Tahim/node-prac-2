import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const url = `http://localhost:5000/users/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    // Update User
    const handelNameChange = e => {
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, email: user.email };
        setUser(updatedUser);
    }
    const handelUpdateUser = () => {

    }
    return (
        <div>
            <h2>This is Update User</h2>
            <h3>ID: {id}</h3>
            <h2>Name: {user.name}</h2>

            <form onSubmit={handelUpdateUser}>
                <input type="text" name="" id="" onChange={handelNameChange} value={user.name} />
                <input type="email" name="" id="" value={user.email} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;