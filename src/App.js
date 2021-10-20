import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import About from "./Pages/About/About";
import PrivateRoute from "./Pages/Auth/PrivateRoute/PrivateRoute";
import Signin from "./Pages/Auth/Signin/Signin";
import Signup from "./Pages/Auth/Signup/Signup";
import Footer from "./Pages/Common/Footer/Footer";
import Header from "./Pages/Common/Header/Header";
import Contact from "./Pages/Contact/Contact";
import Doctors from "./Pages/Doctors/Doctors";
import NotFound from "./Pages/Error/NotFound";
import Home from "./Pages/Home/Home/Home";
import ServiceDetails from "./Pages/Services/ServiceDetails/ServiceDetails";
import WhyChooseUs from "./Pages/WhyChooseUs/WhyChooseUs";
import Services from "./Pages/Services/Services/Services";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/whychooseus">
              <WhyChooseUs></WhyChooseUs>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
