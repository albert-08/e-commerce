import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Products from '../components/Products'
import initialState from '../initialState'
import payload from '../utils/payload'

function Home(){
    const user = payload()
    return(
        <>
            <Layout>
                <div>
                    { user 
                        ?   user.role === 'ADMIN'
                            ? 
                                <>
                                    <h1>Bienvenido!</h1>
                                    <Link to="/addProduct">
                                        <button type="button">Agregar un producto</button>
                                    </Link>
                                    <Link to="/users">
                                        <button type="button">Consultar clientes</button>
                                    </Link>
                                    <button>Consultar inventario</button>
                                    <Link to="/editUser">
                                        <button type="button">Editar Usuario</button>
                                    </Link>
                                    <Link to="/signup">
                                        <button type="button">Agregar Usuario</button>
                                    </Link>
                                </>
                                
                            :   <> 
                                    <h1>Empieza a comprar</h1>
                                    <Products products={initialState.products} />
                                </>    
                        :   <h1>Debes iniciar sesión</h1>
                    }
                </div>
            </Layout>
        </>    
    )
}

export default Home