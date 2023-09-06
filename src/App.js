import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllBlogsPage, HomePage, WritePage, BlogPage } from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/write/:bid",
    element: <WritePage />,
  },
  {
    path: "/all",
    element: <AllBlogsPage />,
  },
  {
    path: "/blog/:id",
    element: <BlogPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
