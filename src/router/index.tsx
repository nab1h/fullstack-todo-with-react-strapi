import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RegisterFormPage from "../pages/RegisterForm";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import RootLayout from "../pages/Layout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import GusetRoute from "../components/auth/GusetRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <GusetRoute>
              <RegisterFormPage />
            </GusetRoute>
          }
        />
        <Route
          path="login"
          element={
            <GusetRoute>
              <LoginPage />
            </GusetRoute>
          }
        />
      </Route>
    </>,
  ),
);
export default router;
