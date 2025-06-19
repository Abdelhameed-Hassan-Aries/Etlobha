import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Hedar from "./Hedar";
import NewCars from "./NewCars";
import UsedCars from "./UsedCars";
import Login from "./Login";
import Signup from "./Signup";
import { LayoutProvider } from "./LayoutContext";
import { AppProvider } from "./contexts/AppContext";

import Car1 from "./car1";
import Buy from "./buy";
import Buy2 from "./buy2";
import Sit from "./sit";
import Forgit from "./forgit";
import Dach from "./dach";

// Import new components
import Brands from "./components/Brands";
import BrandCars from "./components/BrandCars";
import Orders from "./components/Orders";
import CarDetails from "./components/CarDetails";
import SearchResults from "./components/SearchResults";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/used-cars", element: <UsedCars /> },
    { path: "/new-cars", element: <NewCars /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },

    { path: "/car1", element: <Car1 /> },
    { path: "/buy", element: <Buy /> },
    { path: "/buy2", element: <Buy2 /> },
    { path: "/sit", element: <Sit /> },
    { path: "/forgit", element: <Forgit /> },
    { path: "/dach", element: <Dach /> },

    // New API-integrated routes
    { path: "/brands", element: <Brands /> },
    { path: "/brands/:brandId/cars", element: <BrandCars /> },
    { path: "/car/:carId", element: <CarDetails /> },
    { path: "/search", element: <SearchResults /> },
    { path: "/orders", element: <Orders /> },
    { path: "/my-orders", element: <Orders /> },
    { path: "/profile", element: <ProfilePage /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <LayoutProvider>
        <RouterProvider router={router} />
      </LayoutProvider>
    </AppProvider>
  </React.StrictMode>
);
