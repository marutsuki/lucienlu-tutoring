import AppProvider from "./provider";
import AppRouter from "./routes";

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
