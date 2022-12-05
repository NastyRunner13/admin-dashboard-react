import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import styled from "styled-components";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import Products from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/users",
//     element: <UserList />,
//   },
//   {
//     path: "/user/:userId",
//     element: <User />,
//   },
//   {
//     path: "/newUser",
//     element: <NewUser />,
//   },
// ]);

const Container = styled.div`
  display: flex;
`;

// function App() {
//   return (
//     <div>
//       <TopBar />
//       <Container>
//         <SideBar />
//         <RouterProvider router={router} />
//       </Container>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Router>
        <TopBar />
        <Container>
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
