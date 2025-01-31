import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { HomeRoutes } from "./HomeRoutes";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HeaderLayout>{<Home />}</HeaderLayout>}>
        {HomeRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.children}
            />
          );
        })}
      </Route>
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
});
