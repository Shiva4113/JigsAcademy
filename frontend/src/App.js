import './App.css'
import Header from './Components/HeaderComponent/Header'
import Footer from './Components/FooterComponent/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/LoginComponent/Login'

const routes = [<Route path="/login" element={<Login />} />,
                ]
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
