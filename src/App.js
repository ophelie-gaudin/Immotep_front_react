import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useEffect } from "react";
import store from "./ReduxFolder/store";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Layout from "./Components/Main/Layout";
import DashboardPage from "./Pages/DashboardPage";
import MailPassword from "./Pages/MailPassword";
import NewPassword from "./Pages/NewPassword";
import ProjectPage from "./Pages/ProjectPage";

import Profile from "./Pages/Profile";
import ProfileEditPage from "./Pages/ProfileEditPage";
import NewHousing from "./Pages/NewHousing";
import NewProject from "./Pages/NewProject";

import AOS from "aos";
import "aos/dist/aos.css";

import "flowbite";

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
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/new" element={<NewProject />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<ProfileEditPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
