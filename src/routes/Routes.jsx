import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../pages/App/App';
import { LinhaDoTempo } from '../pages/LinhaDoTempo/LinhaDoTempo';

export default function AppRouter() {

    const routes = createRoutes();

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
}

const createRoutes = () => {
    return [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/LinhaDoTempo",
            element: <LinhaDoTempo />,
        },
    ];
}
