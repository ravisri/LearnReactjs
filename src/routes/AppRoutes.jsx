import React from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';
import useCurrentUser from '../hooks/useCurrentUser';
import { createRoutes } from './routeConfig'; 

const AppRoutes = ({token, handleAuthSubmit}) => {
  const navigate = useNavigate();
//   const [currentUser, setCurrentUser] = useCurrentUser();

//   const handleAuthSubmit = (data) => {
//     const user = {
//       email: data.email,
//       name: data.name || 'User',
//       avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name || 'User')}&background=random`,
//     };
//     setCurrentUser(user);
//     navigate('/', { replace: true });
//   };

  const routes = useRoutes(createRoutes(token, handleAuthSubmit, navigate));

  return routes;
};

export default AppRoutes;