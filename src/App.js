import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
}from"react-router-dom"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Acceuil from "./pages/Acceuil"
import Event from "./pages/Event"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Write from "./pages/Write";
import "./style.scss"




const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/acceuil",
        element: <Home />,
      },
     
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/discution",
        element: <Write/>,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);


function App() {
  return (
    <div className="app">
    <div className="container">
      <RouterProvider router={router} />
    </div>
  </div>
  );
}

export default App;
