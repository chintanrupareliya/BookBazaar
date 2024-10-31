import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutePaths } from "../utils/enum";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
const MainNavigation = () => {
  return (
    <div>
      <Routes>
        <Route path={RoutePaths.Register} element={<Signup />} />
        <Route path={RoutePaths.Login} element={<Login />} />
      </Routes>
    </div>
  );
};

export default MainNavigation;
