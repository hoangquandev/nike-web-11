import HomePage from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProductPage from "./pages/DetailProduct/DetailProductPage";
import NavBar from "./components/Navbar/NavBar";
import Cart from "./components/Cart/Cart";
import UserOrders from "./components/User/UserOrder/UserOrder";
import UserProfiles from "./components/User/UserOrder/UserProfile";
import UserFavoriteComponent from "./components/User/UserFavorate/UserFavorate";
import ListProduct from "./components/ListProduct/ListProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detailPage/:id" element={<DetailProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user/order" element={<UserOrders />} />
            <Route path="/user/profile" element={<UserProfiles />} />
            <Route path="/user/favorite" element={<UserFavoriteComponent />} />
            <Route path="/listProduct" element={<ListProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
