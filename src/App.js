import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Query from "./pages/Query";
import ContextProvider from "./data/ContextProvider";
import Error from "./pages/Error";

function App() {
  // router initialization
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/data",
        element: <Query />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
    { basename: "/" }
  );
  return (
    <div className="App">
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </div>
  );
}
export default App;
