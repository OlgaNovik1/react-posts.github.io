import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";


const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }

    return (

        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={<route.element />}
                        path={route.path}
                        key={route.path}
                    />
                )}
                < Route path="/*" element={< Navigate replace to="/posts" />} />
            </Routes >
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.element />}
                        path={route.path}
                        key={route.path}

                    />
                )}
                < Route path="/*" element={< Navigate replace to="/login" />} />
            </Routes>
    );
};



export default AppRouter;