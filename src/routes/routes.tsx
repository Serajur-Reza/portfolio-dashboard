import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import App from "../App";
import Experience from "../components/Experience";
import CreateExperience from "../components/Experience/CreateExperience";
import Home from "../components/Home";
import ProtectedRoute from "../common/ProtectedRoute";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Skills from "../components/Skills";
import CreateProject from "../components/Projects/CreateProject";
import EditExperience from "../components/Experience/EditExperience";
import CreateBlog from "../components/Blogs/CreateBlog";
import EditProject from "../components/Projects/EditProject";
import EditBlog from "../components/Blogs/EditBlog";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Home /> },
      // { path: "about", element: <h1>Hello about</h1> },
    ],
  },

  {
    path: "/skills",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Skills /> },
      // { path: "about", element: <h1>Hello about</h1> },
    ],
  },

  {
    path: "/projects",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Projects /> },
      { path: "create", element: <CreateProject /> },
      { path: "edit", element: <EditProject /> },
      // { path: "about", element: <h1>Hello about</h1> },
    ],
  },

  {
    path: "/experience",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Experience /> },
      { path: "create", element: <CreateExperience /> },
      { path: "edit", element: <EditExperience /> },
      // { path: "about", element: <h1>Hello about</h1> },
    ],
  },

  {
    path: "/blogs",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Blogs /> },
      { path: "create", element: <CreateBlog /> },
      { path: "edit", element: <EditBlog /> },
      // { path: "about", element: <h1>Hello about</h1> },
    ],
  },
]);
