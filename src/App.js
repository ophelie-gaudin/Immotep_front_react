import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useEffect } from "react";
import store from "./ReduxFolder/store";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Layout from "./Components/Main/Layout";
import DashboardPage from "./Pages/DashboardPage";
import AOS from "aos";
import "aos/dist/aos.css";

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
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
