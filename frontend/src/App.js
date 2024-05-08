import Navbar from "./componets/Navbar.jsx";
import Home from "./Home/Home.jsx";
import Footer from "./componets/Footer.jsx";
import Teams from "./componets/Teams";
import Login from "./Reuse/Login.jsx";
import Forgot from "./Reuse/Forgot";
import Contact from "./Reuse/Contact.jsx";
import Otp from "./Reuse/Otp.jsx";
import Account from "./Reuse/Account.jsx";
import PrivateRoute from "./componets/PrivateRoute.jsx";
import DeleteAccount from "./Reuse/DeleteAccount.jsx";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <div >
      <Navbar />
      <Routes>

      <Route element={<PrivateRoute />}>

        <Route path="/" element={<Home />} />
        <Route path="/Teams" element={<Teams />} />

        <Route path="/DeleteAccount" element={<DeleteAccount />} />

        <Route path="*" element={<Navigate to="/" />} />
        
      </Route>

      <Route path="/Otp" element={<Otp />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/Forgot" element={<Forgot />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
