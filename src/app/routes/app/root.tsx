import { FC } from "react";
import { Outlet } from "react-router";
import Header from "./Header";

const Root: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
