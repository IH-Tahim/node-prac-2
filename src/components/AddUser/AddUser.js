import React, { useRef } from 'react';

const AddUser = () => {

    const nameRef = useRef();
    const emailRef = useRef();

    const handelAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name: name, email: email }

        fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('added success ,user Id:', data.insertedId);
                    nameRef.current.value = "";
                    emailRef.current.value = "";
                }
            });


        //clear name and email input



        e.preventDefault();
    }

    return (
        <div>
            <h2>This is Add User</h2>
            <form onSubmit={handelAddUser}>
                <input type="text" ref={nameRef} />
                <input type="email" name="Email" ref={emailRef} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;