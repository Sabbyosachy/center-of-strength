import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Service from './Pages/Home/Service/Service';
import JoinNow from "./Pages/JoinNow/JoinNow";
import Login from './Pages/Login/Login';
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import Trainer from "./Pages/Trainer/Trainer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/">
              <Home/> 
            </Route>
            <Route exact path="/home">
              <Home/> 
            </Route>
            <PrivateRoute exact path="/services/:serviceId">
              <Service/> 
            </PrivateRoute>
            <Route exact path="/login">
              <Login/> 
            </Route>
            <Route exact path="/trainer">
             <Trainer/>
            </Route>
            <Route exact path="/joinnow">
            <JoinNow/>
            </Route>
            <Route path="*">
              <NotFound/> 
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter> 
      </AuthProvider>
    </div>
  );
}

export default App;
