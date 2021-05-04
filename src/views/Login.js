import React from 'react'
import useForm from '../hooks/useForm'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Layout from '../components/Layout'

function Login(){

    let history = useHistory()
    const sendData = (data) => {
        axios.post("https://ecomerce-master.herokuapp.com/api/v1/login",data)
            .then((response) => {
                console.log(response.data)
                const {token} = response.data
                //session.storage
                //local.storage
                window.localStorage.setItem("token",token)
                history.push('/')
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    const {inputs,handleInputChange,handleSubmit} = useForm(sendData,{})

    return(
        <>
            <Layout>
                <form onSubmit={handleSubmit}>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={inputs.email}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-md-10">
                            <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={inputs.password}
                                        onChange={handleInputChange}
                                        className="form-control"
                                    />
                                </div>  
                            </div>
                            <div className="col-md-10">
                                <button type="submit" className="btn btn-dark">Iniciar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Layout>
        </>
    )
}

export default Login