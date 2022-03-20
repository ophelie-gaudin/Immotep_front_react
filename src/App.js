import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useEffect } from "react";
import store from "./ReduxFolder/store";
import Register from "./pages/Register";
import Home from "./pages/";
import Login from "./pages/Login";
import Layout from "./Components/Main/Layout";
import DashboardPage from "./pages/DashboardPage";
import MailPassword from "./pages/MailPassword";
import NewPassword from "./pages/NewPassword";
import ProjectPage from "./pages/ProjectPage";
import ErrorNotFoundPage from "./pages/NotFoundedPage";
import Profile from "./pages/Profile";
import ProfileEditPage from "./pages/ProfileEditPage";
import NewHousing from "./pages/NewHousing";
import NewProject from "./pages/NewProject";
import HousingPage from "./pages/HousingPage";
import HousingEdit from "./pages/HousingEditPage";

import AOS from "aos";
import "aos/dist/aos.css";

import "flowbite";
import ServorErrorPage from "./pages/ServorErrorPage";

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
              <Route path="/dashboard/:project_id" element={<ProjectPage />} />
              <Route
                path="/dashboard/:project_id/housings/new"
                element={<NewHousing />}
              />
              <Route
                path="/dashboard/:project_id/housing/:housing_id"
                element={<HousingPage />}
              />
              <Route
                path="/dashboard/:project_id/housing/:housing_id/edit"
                element={<HousingEdit />}
              />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/new" element={<NewProject />} />
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
