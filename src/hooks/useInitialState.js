import { useState, useEffect } from 'react'
import axios from 'axios'
import initialState from '../initialState'

const API = 'https://ecomerce-master.herokuapp.com/api/v1/item'

const useInitialState = () => {
    const [state, setState] = useState(initialState)
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const response = await axios(API)
        setProducts(response.data)
    }, [])

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state,
        products
    }
}

export default useInitialState