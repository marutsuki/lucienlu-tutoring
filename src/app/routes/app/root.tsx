import { FC } from "react";
import { Outlet } from "react-router";
import AppLayout from "./AppLayout";

const Root: FC = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default Root;
