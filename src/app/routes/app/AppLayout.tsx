import { FC, ReactNode } from "react";
import Header from "./Header";

type AppLayoutProps = {
  children: ReactNode | ReactNode[];
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
