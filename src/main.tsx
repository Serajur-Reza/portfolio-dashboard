import React from "react";
import ReactDOM from "react-dom/client";
import "ckeditor5/ckeditor5.css";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";
import "react-datepicker/dist/react-datepicker.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
