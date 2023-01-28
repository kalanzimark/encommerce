import Login from "./components/Login";
import Splash from "./components/Splash";
import Signup from "./components/Signup";
import Products from "./components/Products";
import ProductInfo from "./components/ProductInfo";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<Products />} />
                <Route path="/productinfo" element={<ProductInfo />} />
            </Routes>
        </div>
    );
}

export default App;
