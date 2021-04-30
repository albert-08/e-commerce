import React from 'react'
import {useHistory} from 'react-router-dom'
import useForm from '../hooks/useForm' 
import axios from 'axios'

function Signup(){
    let history = useHistory()
    const sendData = (data) => {
        console.log("Esta es la data: ",data)
        const cData = { ...data } 
        if(data.password === data.password_confirm)
        {        
            delete cData.password_confirm
            axios.post("https://ecomerce-master.herokuapp.com/api/v1/signup", cData)
            .then((response) => {
                if(response.status === 201){
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

    const {inputs,handleInputChange,handleSubmit} = useForm(sendData,{}) 

    return(
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Nombre</label>
                            <input type="text" 
                            value={inputs.first_name}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="first_name"
                            d="first_name"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Apellidos</label>
                            <input type="text" 
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
                            value={inputs.password_confirm}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="password_confirm" 
                            id="password_confirm"/>
                        </div>
                    </div>       
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-dark">Iniciar</button>
                    </div>
                </div>
            </div>
        </form>
    )

}

export default Signup