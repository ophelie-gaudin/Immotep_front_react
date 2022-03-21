import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useEffect } from "react";
import store from "./reduxFolder/store";
import Register from "./pages/Register";
import Home from "./pages/";
import Login from "./pages/Login";
import Layout from "./components/Main/Layout";
import Dashboard from "./pages/Dashboard";
import MailPassword from "./pages/MailPassword";
import NewPassword from "./pages/NewPassword";
import ErrorNotFoundPage from "./pages/NotFoundedPage";
import Profile from "./pages/Profile";
import ProfileEditPage from "./pages/ProfileEditPage";
import HousingUpdate from "./pages/Housing/Housing.edit";

import AOS from "aos";
import "aos/dist/aos.css";

import "flowbite";
import ServorErrorPage from "./pages/ServorErrorPage";
import HousingCreate from "./pages/Housing/Housing.create";
import HousingRead from "./pages/Housing/Housing.read";
import ProjectRead from "./pages/Project/Project.read";
import ProjectCreate from "./pages/Project/Project.create";

function App() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
    });
  }, []);

  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/forgotpassword" element={<MailPassword />} />
              <Route path="/users/password/edit" element={<NewPassword />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/:project_id" element={<ProjectRead />} />
              <Route
                path="/dashboard/:project_id/housings/new"
                element={<HousingCreate />}
              />
              <Route
                path="/dashboard/:project_id/housing/:housing_id"
                element={<HousingRead />}
              />
              <Route
                path="/dashboard/:project_id/housing/:housing_id/edit"
                element={<HousingUpdate />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/new" element={<ProjectCreate />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<ProfileEditPage />} />
              <Route path="/404" element={<ErrorNotFoundPage />} />
              <Route path="/500" element={<ServorErrorPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
