import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Wallet from "./pages/wallet";
import Company from "./pages/about";
import Help from "./pages/help";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/wallet", element: <Wallet /> },
    { path: "/about", element: <Company /> },
    { path: "/help", element: <Help /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;
