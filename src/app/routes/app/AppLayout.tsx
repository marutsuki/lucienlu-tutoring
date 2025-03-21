import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type AppLayoutProps = {
  children: ReactNode | ReactNode[];
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
