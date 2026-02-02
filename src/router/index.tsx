import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import RegisterFormPage from "../pages/RegisterForm";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import RootLayout from "../pages/Layout";
const isLoginIn= true;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={isLoginIn ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="register" element={<RegisterFormPage />} />
        <Route path="login" element={!isLoginIn ? <LoginPage /> : <Navigate to="/" />} />
      </Route>
    </>,
  ),
);
export default router;
