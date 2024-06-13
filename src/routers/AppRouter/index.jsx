import { Fragment, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "../../pages/Admin/Login";
import { DefaultLayout } from "../../components/DefaultLayout";

export const publicRouters = [
  {
    path: "/login",
    name: "admin-login",
    component: Login,
    layout: null,
  },
];

export const adminRouters = [];

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <ScrollToTop />
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
