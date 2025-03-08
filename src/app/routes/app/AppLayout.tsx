import { FC, ReactNode } from "react";
import Header from "./Header";

type AppLayoutProps = {
  children: ReactNode | ReactNode[];
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="grid place-items-center">{children}</main>
    </>
  );
};

export default AppLayout;
