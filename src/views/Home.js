import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../components/Products'
import initialState from '../initialState'
import payload from '../utils/payload'

function Home(){
    const user = payload()
    return(
        <div>
            { user 
                ?   user.role === 'ADMIN'
                    ? 
                        <>
                            <h1>Bienvenido!</h1>
                            <button>Agregar un producto</button>
                            <Link to="/users">
                                <button type="button">Consultar clientes</button>
                            </Link>
                            <button>Consultar inventario</button>
                            <button>Editar Usuario</button>
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
    )
}

export default Home