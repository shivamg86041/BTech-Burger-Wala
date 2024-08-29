import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import "../src/styles/app.scss";
import "../src/styles/header.scss";
import "../src/styles/home.scss";
import "../src/styles/founder.scss";
import "../src/styles/menu.scss";
import "../src/styles/footer.scss";
import "../src/styles/contact.scss";
import "../src/styles/cart.scss";
import "../src/styles/shipping.scss";
import "../src/styles/confirmOrder.scss";
import "../src/styles/payment.scss";
import "../src/styles/login.scss";
import "../src/styles/profile.scss";
import "../src/styles/table.scss";
import "../src/styles/orderDetails.scss";
import "../src/styles/dashboard.scss";
import "../src/styles/about.scss";

import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders.jsx"
import About from "./components/about/About.jsx";
import NotFound from "./components/layout/NotFound.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user.js";
import { useEffect } from "react";
import toast from 'react-hot-toast'

function App() {
  const dispatch = useDispatch();
  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/confirm-order" element={<ConfirmOrder/>}/>
        <Route path="/payment-success" element={<PaymentSuccess/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/me" element={<Profile/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/order/:id" element={<OrderDetails/>}/>
        <Route path="/admin/users" element={<Users/>}/>
        <Route path="/admin/orders" element={<Orders/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
