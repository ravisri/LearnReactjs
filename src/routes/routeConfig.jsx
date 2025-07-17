import React from "react";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoute from "../Authentication/PrivateRoute";
import Dashboard from "../Authentication/Dashboard";


export const createRoutes = (token, handleAuthSubmit, navigate) => [
    {path:'/login', 
        element:(
           <div className='fixed inset-0 bg-gradient-to-tr bg-blue-500/5 from-fuchsia-500/5 to-indigo-500/25  flex items-center justify-center'>
           <Login onSubmit={handleAuthSubmit} onSwitchMode={() => navigate('/signup')} />
           </div> 
        )
    },
    {path:'/register', element:(
           <div className='fixed inset-0 from-fuchsia-500/5 to-indigo-500/5 bg-blue-500/5 flex items-center justify-center'>
           <Register onSubmit={handleAuthSubmit} onSwitchMode={() => navigate('/login')}/>
           </div> 
        )},
    {
        path:'/',
        element:(
            <PrivateRoute>
                <Dashboard token={token} />
            </PrivateRoute>
        )
    }
]