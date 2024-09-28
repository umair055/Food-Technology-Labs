import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function ProtectedRoutes({ children}) {
  const { isAuthenticated, loading } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return loading ? <div>Loading...</div> : children

   
}



