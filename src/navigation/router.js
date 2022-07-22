import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
                        <Route path='/'></Route>
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        </>
    )
}
