import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Home from '../Home/Home';

const Router = () => {
    const router=createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                }
            ]
        }
    ])
    return (
        <div>
            
        </div>
    );
};

export default Router;