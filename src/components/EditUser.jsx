import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import useForm from '../hooks/useForm' 
import axios from 'axios'
import payload from '../utils/payload'

function EditUser(){
    const user = payload()
    console.log(user.id)
    let history = useHistory()
    const [profile,setProfile] = useState({})

    const token = window.localStorage.getItem('token')
        const config = {
            headers:{
                Authorization: `JWT ${token}`
            }
        }

    useEffect(() => {
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/user/${user.id}`,config)
        .then((response) => {
            setProfile(response.data)
            console.log(response.data)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

    },[])

    const sendData = (data) => {
        console.log("Esta es la data: ",data)
        const cData = { ...data } 
        if(data.password === data.password_confirm)
        {        
            delete cData.password_confirm
            axios.patch(`https://ecomerce-master.herokuapp.com/api/v1/user/${user.id}`, cData, config)
            .then((response) => {
                console.log(response)
                if(response.status === 200){
                    //cuando se crea el usuario lo mandamos a login
                    history.push("/")
                }
            }).catch((error) => {
                alert(error.response.data.message)
            }) 
        }else{
            alert("Passwords no coinciden")
        }    
    }
    console.log(profile)
    const {inputs,handleInputChange,handleSubmit} = useForm(sendData,{}) 

    return(
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Nombre</label>
                            <input type="text"
                            placeholder={profile.first_name}
                            value={inputs.first_name}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="first_name"
                            id="first_name"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Apellidos</label>
                            <input type="text"
                            placeholder={profile.last_name}
                            value={inputs.last_name}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="last_name" 
                            id="last_name"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email"
                            placeholder={profile.email}
                            value={inputs.email}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="email" 
                            id="email"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password"
                            placeholder={profile.password}
                            value={inputs.password}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="password" 
                            id="password"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Password Confirm</label>
                            <input type="password"
                            placeholder={profile.password} 
                            value={inputs.password_confirm}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="password_confirm" 
                            id="password_confirm"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Fecha de nacimiento</label>
                            <input type="date"
                            placeholder={profile.birth_date}
                            value={inputs.birth_date}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="birth_date"
                            id="birth_date"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Genero</label>
                            <select 
                            value={inputs.gender}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="gender" 
                            id="gender">
                                <option value=" " selected>Choose an option</option>
                                <option value="M">Hombre</option>
                                <option value="F">Mujer</option>
                                <option value="X">Otro</option>
                            </select>
                        </div>
                    </div>
                    { user
                        ?   user.role === 'ADMIN' 
                            ?
                                <div className="col-md-5">
                                    <div className="form-group">
                                        <label htmlFor="">Tipo de Usuario</label>
                                        <select 
                                        value={inputs.role}
                                        onChange={handleInputChange}
                                        className="form-control" 
                                        name="role" 
                                        id="role">
                                            <option value=" " selected>Choose an option</option>
                                            <option value="ADMIN">Administrador</option>
                                            <option value="CUSTOMER">Cliente</option>
                                        </select>
                                    </div>
                                </div>
                            :   <div className="col-md-5">
                                    <div className="form-group">
                                        <label htmlFor="">Tipo de Usuario</label>
                                        <select 
                                        value={inputs.role}
                                        onChange={handleInputChange}
                                        className="form-control" 
                                        name="role" 
                                        id="role">
                                            <option value="CUSTOMER">Cliente</option>
                                        </select>
                                    </div>
                                </div>
                        :   <div className="col-md-5">
                                <div className="form-group">
                                    <label htmlFor="">Tipo de Usuario</label>
                                    <select 
                                    value={inputs.role}
                                    onChange={handleInputChange}
                                    className="form-control" 
                                    name="role" 
                                    id="role">
                                        <option value="CUSTOMER">Cliente</option>
                                    </select>
                                </div>
                            </div>
                    }    
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-dark">Iniciar</button>
                    </div>
                </div>
            </div>
        </form>
    )

}

export default EditUser