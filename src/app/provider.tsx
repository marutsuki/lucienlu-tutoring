import { FC, Suspense } from "react";
import ThemeProvider from "./theme";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center">
            Loading...
          </div>
        }
      >
        {children}
      </Suspense>
    </ThemeProvider>
  );
};

export default AppProvider;
