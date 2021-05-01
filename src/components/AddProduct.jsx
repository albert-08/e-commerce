import React from 'react'
import {useHistory} from 'react-router-dom'
import useForm from '../hooks/useForm' 
import axios from 'axios'
import payload from '../utils/payload'

function AddProduct(){
    const user = payload()
    let history = useHistory()
    const sendData = (data) => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
                Authorization: `JWT ${token}`
            }
        }
        console.log("Esta es la data: ", data) 
        axios.post("https://ecomerce-master.herokuapp.com/api/v1/item", data, config)
        .then((response) => {
            if(response.status === 201){
                //cuando se crea el usuario lo mandamos a login
                history.push("/")
            }
        }).catch((error) => {
            alert(error.response.data.message)
        }) 
    }

    const {inputs,handleInputChange,handleSubmit} = useForm(sendData,{}) 

    return(
        <>
            {(  user 
                ?
                    user.role === 'ADMIN' 
                    ?
                        <form onSubmit={handleSubmit}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label htmlFor="">Nombre del Producto</label>
                                            <input type="text" 
                                            value={inputs.product_name}
                                            onChange={handleInputChange}
                                            className="form-control" 
                                            name="product_name"
                                            id="product_name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label htmlFor="">SKU</label>
                                            <input type="text" 
                                            value={inputs.sku}
                                            onChange={handleInputChange}
                                            className="form-control" 
                                            name="sku" 
                                            id="sku"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label htmlFor="">Imagen</label>
                                            <input type="text" 
                                            value={inputs.image}
                                            onChange={handleInputChange}
                                            className="form-control" 
                                            name="image" 
                                            id="image"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label htmlFor="">Descripción</label>
                                            <textarea
                                            value={inputs.description}
                                            onChange={handleInputChange}
                                            className="form-control" 
                                            name="description" 
                                            id="description"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label htmlFor="">Precio</label>
                                            <input type="number" 
                                            value={inputs.price}
                                            onChange={handleInputChange}
                                            className="form-control" 
                                            name="price" 
                                            id="price"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label htmlFor="">Marca</label>
                                            <input type="text" 
                                            value={inputs.brand}
                                            onChange={handleInputChange}
                                            className="form-control" 
                                            name="brand"
                                            id="brand"/>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label htmlFor="">Categoría</label>
                                            <select 
                                            value={inputs.category}
                                            onChange={handleInputChange}
                                            className="form-control" 
                                            name="category" 
                                            id="category">
                                                <option value=" " selected>Choose an option</option>
                                                <option value="Books">Books</option>
                                                <option value="Movies">Movies</option>
                                                <option value="Music">Music</option>
                                                <option value="Games">Games</option>
                                                <option value="Electronics">Electronics</option>
                                                <option value="Computers">Computers</option>
                                                <option value="Home">Home</option>
                                                <option value="Garden">Garden</option>
                                                <option value="Tools">Tools</option>
                                                <option value="Grocery">Grocery</option>
                                                <option value="Health">Health</option>
                                                <option value="Beauty">Beauty</option>
                                                <option value="Toys">Toys</option>
                                                <option value="Kids">Kids</option>
                                                <option value="Baby">Baby</option>
                                                <option value="Clothing">Clothing</option>
                                                <option value="Shoes">Shoes</option>
                                                <option value="Jewelery">Jewelery</option>
                                                <option value="Sports">Sports</option>
                                                <option value="Outdoors">Outdoors</option>
                                                <option value="Automotive">Automotive</option>
                                                <option value="Industrial">Industrial</option>
                                            </select>
                                        </div>
                                    </div>  
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-dark">Iniciar</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    : <h1>Tienes Que Ser Administrador</h1>
                :   <h1>Tines Que Iniciar Sesión</h1>
            )}
        </>
    )

}

export default AddProduct