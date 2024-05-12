import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layout/main-layout/MainLayout";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { index: true, element: <Navigate to="/home" replace /> },
        {
          path: "/home",
          element: <Home />,
        },
        { path: "/about", element: <About /> },
        { path: "/resume", element: <Resume /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
