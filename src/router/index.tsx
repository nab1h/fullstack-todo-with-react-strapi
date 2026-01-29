import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import RegisterFormPage from "../pages/RegisterForm";
import LoginPage from "../pages/Login";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<RegisterFormPage />} />
      <Route path="/login" element={<LoginPage />} />
    </>,
  ),
);
export default router;
