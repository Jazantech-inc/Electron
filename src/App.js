import Header from "./pages/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Naviga from "./component/Naviga";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Footer from "./pages/Footer";
import Login from "./component/Login";
import Signup from "./component/Signup";
import ProtectedRoute from "./component/ProtectedRoute";
import P404 from "./pages/P404";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import Loader from "./component/Loader";
import SingleProduct from "./pages/SingleProduct";	
import Admin from "./pages/Admin";
function App() {
  const {loading} = useSelector(state => state.loaders);
  return (
    <div> 
      
    {loading && 
    <Loader />
    }
      <BrowserRouter>
      <Header/>
      <Naviga/>
      <Routes>
        <Route exact path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute> }/>
        <Route path="/admin" element={<ProtectedRoute> <Admin /> </ProtectedRoute>} />
        <Route exact path="/" element={ <Home/> }/>
        <Route exact path="/about" element={<Aboutus/>}/>
        <Route exact path="/service" element={<Services/>}/>
        <Route exact path="/shop" element={<ProtectedRoute><Shop/></ProtectedRoute> }/>
        <Route path="/products/:id" element={<ProtectedRoute> <SingleProduct /> </ProtectedRoute>} />
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="*" element={<P404/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
