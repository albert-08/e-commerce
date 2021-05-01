import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'https://ecomerce-master.herokuapp.com/api/v1/user'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
                Authorization: `JWT ${token}`
            }
        }
        axios.get(API, config)
        .then((response) => {
            setUsers(response.data)
            console.log(response.data)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

    },[])

    return(
        <div className="Users">
            <div className="Users-items">
                {users.map(user => (
                    <div className="Users-item">
                    <img src={user.profile_img} alt={user._id}/>
                    <div className="Users-item-info">
                        <h2>
                            {user.first_name}
                            <span>
                                {user.email}
                            </span>
                        </h2>
                        <p>{user.role}</p>
                    </div>
                    <button type="button">Editar</button>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Users