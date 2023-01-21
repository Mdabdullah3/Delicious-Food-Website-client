import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const UseToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const image = user?.user?.photoURL;

        let currentUser;
        if (image) {
            currentUser = { email, name, image, role: "user" };
        } else {
            currentUser = { email, name, role: "user" };
        }
        if (email) {
            fetch(`https://delicious-food-djab.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    setToken(data)
                    toast.success("Thank You")
                })
        }

    }, [user]);
    return [token];
}

export default UseToken;