import { createBrowserRouter } from "react-router-dom";
import Intro from "./routes/Intro";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Intro />,
      },
    ],
  },
]);
export default router;
