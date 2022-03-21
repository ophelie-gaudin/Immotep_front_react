import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useEffect } from "react";
import store from "./reduxFolder/store";
import Register from "./pages/register";
import Home from "./pages/";
import Login from "./pages/login";
import Layout from "./components/Main/Layout";
import Dashboard from "./pages/Dashboard";
import ErrorNotFoundPage from "./pages/404";
import HousingUpdate from "./pages/Housing/Housing.edit";

import AOS from "aos";
import "aos/dist/aos.css";

import "flowbite";
import ServorErrorPage from "./pages/500";
import HousingCreate from "./pages/Housing/Housing.create";
import HousingRead from "./pages/Housing/Housing.read";
import ProjectRead from "./pages/Project/Project.read";
import ProjectCreate from "./pages/Project/Project.create";
import ProfileUpdate from "./pages/Profile/Profile.update";
import PasswordCreate from "./pages/Password/Password.create";
import PasswordUpdate from "./pages/Password/Password.update";
import ProfileRead from "./pages/Profile/Profile.read";

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
              {/* MAIN */}
              <Route path="/" element={<Home />} />
              <Route path="/404" element={<ErrorNotFoundPage />} />
              <Route path="/500" element={<ServorErrorPage />} />

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* PROJECT */}
              <Route path="/dashboard/new" element={<ProjectCreate />} />
              <Route path="/dashboard/:project_id" element={<ProjectRead />} />

              {/* HOUSING */}
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

              {/* PROFILE */}

              <Route path="/profile" element={<ProfileRead />} />
              <Route path="/profile/edit" element={<ProfileUpdate />} />

              {/* PASSWORD */}

              <Route path="/forgotpassword" element={<PasswordCreate />} />
              <Route path="/users/password/edit" element={<PasswordUpdate />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
