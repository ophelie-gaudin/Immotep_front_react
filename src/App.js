import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ReduxFolder/store";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import OrangeButton from "./Components/Main/OrangeButton";
import PhantomButton from "./Components/Main/PhantomButton";

function App() {
  return (
    
    <Provider store={store}>
      <>
        <BrowserRouter>
          {/* <NavBar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </>
    </Provider>
    
  );

}

export default App;
