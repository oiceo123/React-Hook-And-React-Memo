import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import UseStatePage from "./routes/useStatePage";
import UseEffectPage from "./routes/useEffectPage";
import UseRefPage from "./routes/useRefPage";
import ThemeContext from "./contexts/ThemeContext";
import UseContextPage from "./routes/useContextPage";
import UseReducerPage from "./routes/useReducerPage";
import UseMemoPage from "./routes/useMemoPage";
import UseCallbackPage from "./routes/useCallbackPage";
import MemoPage from "./routes/memoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "useState",
        element: <UseStatePage />,
      },
      {
        path: "useEffect",
        element: <UseEffectPage />,
      },
      {
        path: "useRef",
        element: <UseRefPage />,
      },
      {
        path: "useContext",
        element: (
          <ThemeContext.Provider value="red">
            <UseContextPage />
          </ThemeContext.Provider>
        ),
      },
      {
        path: "useReducer",
        element: <UseReducerPage />,
      },
      {
        path: "useMemo",
        element: <UseMemoPage />,
      },
      {
        path: "useCallback",
        element: <UseCallbackPage />,
      },
      {
        path: "memo",
        element: <MemoPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
