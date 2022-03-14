import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ReduxFolder/store";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Layout from "./Components/Main/Layout";

function App() {
  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
