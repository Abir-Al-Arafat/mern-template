// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router";

// In the future, these will be imported from your src/pages folder
const Home = () => <div className="p-8 text-2xl font-bold">Home Page</div>;
const NotFound = () => (
  <div className="p-8 text-red-500">404 - Page Not Found</div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
