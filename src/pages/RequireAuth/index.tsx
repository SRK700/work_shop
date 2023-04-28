import useAuth from "@/hooks/useAuth";
import { restoreState } from "@/store/slices/authSlice";
// import { restoreState } from "@/store/slices/authSlice";
import { constant } from "@/utils/constant";
import { getLocalObject } from "@/utils/localHandier";
import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const location = useLocation();
  const { auth } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth) {
      const restore = getLocalObject(constant.STORAGE_TOKEN);
      dispatch(restoreState(restore));
    }
  }, []);

  const RequireAuth = useMemo(() => {
    return auth ? (
      <Outlet />
    ) : (
      <Navigate to="/signin" state={{ from: location }} replace />
    );
  }, []);
  return RequireAuth;
};

export default RequireAuth;
