import './App.css'

//Header Footer imports
import Header from './Components/HeaderComponent/Header'
import Footer from './Components/FooterComponent/Footer'

//React Router Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importing all pages
import Login from './Components/LoginComponent/Login'
import Dashboard from './Components/DashboardComponents/Dashboard'
import Home from './Components/HomePageComponent/Home'
import Signup from './Components/SignupComponent/Signup'
import Outerbox from './Components/OuterboxComponent/Outerbox';

const routes = [<Route path="/login" element={<Login />} />,
                <Route path = "/dashboard" element = {<Dashboard />} />,
                <Route path = "/" element = {<Home />} />,
                <Route path = "/signup" element = {<Signup />} />,
                <Route path='/assignments' element = {<Outerbox title={"Assignments"}/>}/>]
                
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>{routes}</Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
