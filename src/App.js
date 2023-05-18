import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Features from './components/Features';
import Team from './components/Team'
import Signin from './components/Signin'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header/>
    },
    {
      path: "/features",
      element: <Features />,
    },
    {
      path: "/team",
      element: <Team />,
    },
    {
      path: "/login",
      element: <Signin />,
    }
  ])
  return (
    <RouterProvider router={router} />
  );

}

export default App;
