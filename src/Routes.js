import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from './views/Home'
import Signup from './views/Signup'
import Login from './views/Login'
import Checkout from './containers/Checkout'
import Information from './containers/Information'
import Payment from './containers/Payment'
import Success from './containers/Success'
import NotFound from './containers/NotFound'
import Layout from './components/Layout'
import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState'

const Logout = () => {
    window.localStorage.removeItem('token')
    return <Redirect to="/" />
}

const Routes = () => {
    const initialState = useInitialState()
    return(
        <AppContext.Provider value={initialState}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/checkout/information" component={Information} />
                        <Route exact path="/checkout/payment" component={Payment} />
                        <Route exact path="/checkout/success" component={Success} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </Router>
        </AppContext.Provider>
    )
}

export default Routes