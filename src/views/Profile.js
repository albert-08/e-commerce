import React,{useEffect,useState} from 'react'
import axios from 'axios'
import protect from '../utils/protect'

function Profile(){
    
    const [profile,setProfile] = useState({})

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
                Authorization: `JWT ${token}`
            }
        }
        axios.get("https://ecomerce-master.herokuapp.com/api/v1/user/me",config)
        .then((response) => {
            setProfile(response.data.user)
            console.log(response.data.user)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

    },[])

    return(
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1>Perfil:</h1>
                        <span>Nombre: {profile.first_name}</span>
                        <br/>
                        <span>Apellidos: {profile.last_name}</span>
                        <br/>
                        <span>Email: {profile.email}</span>
                        <br/>
                        <span>Tipo de usuario: {profile.role}</span>
                    </div>
                </div>              
            </div>
        </div>
    )
}

export default protect(Profile)