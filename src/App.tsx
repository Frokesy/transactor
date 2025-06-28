import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Wallet from "./pages/wallet";
import Company from "./pages/about";
import Help from "./pages/help";
import FAQs from "./pages/faqs";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog/blogPost";
import NotFound from "./pages/404";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/wallet", element: <Wallet /> },
    { path: "/about", element: <Company /> },
    { path: "/help", element: <Help /> },
    { path: "/faqs", element: <FAQs /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/:id", element: <BlogPost /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;
