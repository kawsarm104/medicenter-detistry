import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import About from "./Pages/About/About";
import PrivateRoute from "./Pages/Auth/PrivateRoute/PrivateRoute";
import Signin from "./Pages/Auth/Signin/Signin";
import Footer from "./Pages/Common/Footer/Footer";
import Header from "./Pages/Common/Header/Header";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/Error/NotFound";
import Home from "./Pages/Home/Home";
import ServiceDetails from "./Pages/Services/ServiceDetails/ServiceDetails";
import Services from "./Pages/Services/Services/Services";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import Footer from "./pages/Footer/Footer";
// import Header from "./pages/Header/Header";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login/Login";
// import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
// import NotFound from "./pages/NotFound/NotFound";
// import Services from "./pages/Service/Services";
// import Servicedetails from "./pages/ServiceDetails/Servicedetails";
// import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div className="App">
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
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
            <Signin></Signin>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Slider/> */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
