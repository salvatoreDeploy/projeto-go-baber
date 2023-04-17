import React from "react";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/AuthContext";
import { Loading } from "../components/Loading";

export function Routes() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
}
