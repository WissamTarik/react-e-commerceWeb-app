import { RouteObject } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../pages/Home/Home"));
const Products = lazy(() => import("../pages/Products/Products"));
const Categories = lazy(() => import("../pages/Categories/Categories"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const ProductDetails = lazy(
  () => import("../pages/ProductDetails/ProductDetails")
);
const PartsOfProducts = lazy(
  () => import("../pages/PartsOfProducts/PartsOfProducts")
);
const ForgetPassword = lazy(
  () => import("../pages/ForgetPassword/ForgetPassword")
);
const VerifyPassword = lazy(
  () => import("../pages/VerifyPassword/VerifyPassword")
);
const UpdateLoggedUserPassword = lazy(
  () => import("../pages/UpdateLoggedUserPassword/UpdateLoggedUserPassword")
);
const Brands = lazy(() => import("../pages/Brands/Brands"));
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SuspenseHandler from "../components/SuspenseHandler/SuspenseHandler";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
const AllOrders = lazy(() => import("../pages/AllOrders/AllOrders"));
const PaymentUserInformation = lazy(
  () => import("../pages/PaymentUserInformation/PaymentUserInformation")
);import MainLayout from '../Layout/MainLayout';


export const routesConfig:RouteObject[]=[
    {
        path: "",
      element: <MainLayout />,
      children: [
              {
                index: true,
                element: (
                  <ProtectedRoute>
                    <SuspenseHandler message="Home Page">
                      <Home />
                    </SuspenseHandler>
                  </ProtectedRoute>
                ),
              },
              {
                path: "/products",
                element: (
                  <SuspenseHandler message="Products Page">
                    <Products />
                  </SuspenseHandler>
                ),
              },
              {
                path: "/brands",
                element: (
                  <SuspenseHandler message="Products Page">
                    <Brands />
                  </SuspenseHandler>
                ),
              },
              {
                path: "/categories",
                element: (
                  <SuspenseHandler message="Categories Page">
                    <Categories />
                  </SuspenseHandler>
                ),
              },
              {
                path: "/cart",
                element: (
                  <ProtectedRoute>
                    <SuspenseHandler message="Cart Page">
                      <Cart />
                    </SuspenseHandler>
                  </ProtectedRoute>
                ),
              },
              {
                path: "/wishlist",
                element: (
                  <ProtectedRoute>
                    <SuspenseHandler message="Wishlist Page">
                      <Wishlist />
                    </SuspenseHandler>
                  </ProtectedRoute>
                ),
              },
              {
                path: "/paymentUserInformation",
                element: (
                  <ProtectedRoute>
                    <SuspenseHandler message="Payment User Information Page">
                      <PaymentUserInformation />
                    </SuspenseHandler>
                  </ProtectedRoute>
                ),
              },
              {
                path: "/allOrders",
                element: (
                  <ProtectedRoute>
                    <SuspenseHandler message="Orders Page">
                      <AllOrders />
                    </SuspenseHandler>
                  </ProtectedRoute>
                ),
              },
              { path: "/login", element: <Login /> },
              {
                path: "/forgetPassword",
                element: (
                  <SuspenseHandler message="Forget Password Page">
                    <ForgetPassword />
                  </SuspenseHandler>
                ),
              },
              {
                path: "/verifyPassword",
                element: (
                  <SuspenseHandler message="Verify Password Page">
                    <VerifyPassword />
                  </SuspenseHandler>
                ),
              },
              {
                path: "/updatePassword",
                element: (
                  <SuspenseHandler message="Update Password Page">
                    <UpdateLoggedUserPassword />
                  </SuspenseHandler>
                ),
              },
              { path: "/register", element: <Register /> },
              {
                path: "/partsOfProducts/:categoryName",
                element: (
                  <SuspenseHandler>
                    <PartsOfProducts />
                  </SuspenseHandler>
                ),
              },
              {
                path: "products/productDetails/:prefix",
                element: (
                  <SuspenseHandler>
                    <ProductDetails />
                  </SuspenseHandler>
                ),
              },
            ],
            errorElement: <ErrorPage />,
    }
]