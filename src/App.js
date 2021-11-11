import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header/Header";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import MyOrders from "./Pages/MyOrders/MyOrders";
import AddItem from "./Pages/AddItem/AddItem";
import ManageItems from "./Pages/ManageItems/ManageItems";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/order">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/addItem">
              <AddItem />
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <ManageItems />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
