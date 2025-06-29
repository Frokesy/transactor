import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";
import Spinner from "./components/defaults/Spinner";

const Home = lazy(() => import("./pages/home"));
const Wallet = lazy(() => import("./pages/wallet"));
const Company = lazy(() => import("./pages/about"));
const Help = lazy(() => import("./pages/help"));
const FAQs = lazy(() => import("./pages/faqs"));
const Blog = lazy(() => import("./pages/blog"));
const BlogPost = lazy(() => import("./pages/blog/blogPost"));
const NotFound = lazy(() => import("./pages/404"));

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
      <Suspense fallback={<Spinner />}>
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
            path="/blog"
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
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
