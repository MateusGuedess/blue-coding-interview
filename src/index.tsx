import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./style/GlobalStyle";
import App from "./pages/App";
import History from "./pages/History";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HistoryContextProvider } from "./contexts/HistoryContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/history",
    element: <History />,
  },
]);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <HistoryContextProvider>
        <RouterProvider router={router} />
      </HistoryContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
