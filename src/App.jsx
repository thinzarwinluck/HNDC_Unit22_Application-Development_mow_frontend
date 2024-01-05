import Layout from "./Layout";
import Home from "./home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about/About";
import Donate from "./donate/Donate";
import Admin from "./admin/Admin";
import Meal from "./meal/Meal";
import Volunteer from "./volunteer/Volunteer";
import Register from "./register/Register";
import Login from "./login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/meal/list" element={<Meal />} />
          <Route path="/member" element={<Volunteer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
