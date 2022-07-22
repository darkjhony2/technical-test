import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../home';
import MyOrders from '../views/MyOrders';

export const Router = () => {

    useEffect(() => {
        let route = window.location.href;
        if (route.indexOf("#") > 0) {
            route = route.replace("#", "");
            window.location.href = route;
        }
    }, [])


    return (
        <>
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/my-orders' element={<MyOrders/>} />
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        </>
    )
}
