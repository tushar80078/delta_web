import { Route, Navigate, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import authRoutes from './routes';


const AuthenticatedRoutes = ({ userRole }) => {

  const [authRoutesState, setAuthRoutesState] = useState([]);
  const Location = useLocation();


  useEffect(() => {
    // Conditionally Filtering All Routes On The Basis Of Role
    const routes = authRoutes?.filter(route =>
      route.access.includes(userRole) || route.access.includes('All')
    );

    setAuthRoutesState(routes);
  }, [userRole])

  // Only reder when authRoutesState has minimum one route.
  if (authRoutesState.length == 0) {
    return null
  }


  return (
    <Routes>
      {/**-------------  Conditionally Redering All Routes On The Basis Of Role -------------**/}

      <Route
        path='/'
        element={<Navigate replace to={`${Location.pathname}app/user-home`} />}

      />

      {authRoutesState.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}

      {/**-------------  Fallback for unauthorized access -------------**/}
      <Route path="/*" element={<Navigate to="/app/unauthorized" />} />
    </Routes>
  );
};

AuthenticatedRoutes.propTypes = {
  userRole: PropTypes.string.isRequired
};

export default AuthenticatedRoutes;

