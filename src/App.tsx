import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Direct imports (no more lazy loading)
import Home from "./pages/home";
import Wallet from "./pages/wallet";
import Company from "./pages/about";
import Help from "./pages/help";
import FAQs from "./pages/faqs";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog/blogPost";
import NotFound from "./pages/404";

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/wallet"
          element={
            <PageWrapper>
              <Wallet />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <Company />
            </PageWrapper>
          }
        />
        <Route
          path="/help"
          element={
            <PageWrapper>
              <Help />
            </PageWrapper>
          }
        />
        <Route
          path="/faqs"
          element={
            <PageWrapper>
              <FAQs />
            </PageWrapper>
          }
        />
        <Route
          path="/resources"
          element={
            <PageWrapper>
              <Blog />
            </PageWrapper>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <PageWrapper>
              <BlogPost />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
