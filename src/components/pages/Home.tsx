import { FC, memo } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const Home: FC = memo(() => {
  const location = useLocation();
  if (location.pathname !== "/home") {
    return <Outlet />;
  }
  return (
    <>
      <p>ほーむ画面です</p>
      <Outlet />
    </>
  );
});
