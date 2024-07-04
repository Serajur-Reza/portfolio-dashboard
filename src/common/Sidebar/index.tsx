import { Link } from "react-router-dom";
import Menu from "../Menu";

const navigation = [
  {
    href: "/",
    name: "Home",
  },
  // {
  //   href: "/skills",
  //   name: "Skills",
  // },
  // {
  //   href: "/projects",
  //   name: "Projects",
  // },
  // {
  //   href: "/",
  //   name: "Experience",
  // },
  // {
  //   href: "/blogs",
  //   name: "Blogs",
  // },
];

const skillsNav = [{ name: "Home", href: "/skills", icon: "" }];

const projectsNav = [
  { name: "Home", href: "/projects", icon: "" },
  { name: "Create Projects", href: "/projects/create", icon: "" },
  { name: "Edit Project", href: "/projects/edit", icon: "" },
];

const experienceNav = [
  { name: "Home", href: "/experience", icon: "" },
  { name: "Create Experience", href: "/experience/create", icon: "" },
  { name: "Edit Experience", href: "/experience/edit", icon: "" },
];

const blogsNav = [
  { name: "Home", href: "/blogs", icon: "" },
  { name: "Create Blog", href: "/blogs/create", icon: "" },
  { name: "Edit Blog", href: "/blogs/edit", icon: "" },
];

const Sidebar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-[200px] h-full border-r bg-white space-y-8">
        <div className="flex flex-col h-full">
          {/* <div className="h-20 flex items-center px-8">
            <a href="javascript:void(0)" className="flex-none">
              <img
                src="https://floatui.com/logo.svg"
                width={140}
                className="mx-auto"
              />
            </a>
          </div> */}
          <div className="flex-1 flex flex-col h-full overflow-auto">
            <ul className="px-4 text-sm font-medium flex-1">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                  >
                    {/* <div className="text-gray-500">{item.icon}</div> */}
                    {item.name}
                  </Link>
                </li>
              ))}

              <li>
                <Menu items={skillsNav}>Skills</Menu>
              </li>
              <li>
                <Menu items={projectsNav}>Projects</Menu>
              </li>
              <li>
                <Menu items={experienceNav}>Experience</Menu>
              </li>
              <li>
                <Menu items={blogsNav}>Blogs</Menu>
              </li>
            </ul>
            <div>
              <ul className="px-4 pb-4 text-sm font-medium">
                {/* {navsFooter.map((item, idx) => (
                  
                ))} */}
                <li>
                  <Link
                    to={"/login"}
                    className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                    onClick={() => {
                      console.log("logged out");
                      localStorage.removeItem("authToken");
                    }}
                  >
                    <div className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                    </div>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
