import { Link } from "react-router-dom";
import { useGetProjects } from "../../queryHooks/projects/useGetProject";

const Projects = () => {
  const { data: projects } = useGetProjects();

  return (
    <>
      <div className="container mx-auto px-4 my-8  animate-fade">
        <div className="flex justify-center font-bold text-2xl text-blue-600  underline decoration-blue-600">
          <h1>Projects</h1>
        </div>

        <div className="mt-5">
          <div className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {" "}
            {projects?.data?.data?.slice(0, 6)?.map((item: any) => (
              <div className="w-full mx-auto group sm:max-w-sm">
                <Link to={`/projects/${item?._id}`}>
                  <img
                    src={
                      "https://lh3.googleusercontent.com/a/ACg8ocKhOcP9rnWyVrZqlEubp3q8AmVUz6G73QnngpfLKcDziJJZLq26=s288-c-no"
                    }
                    loading="lazy"
                    alt={"items.title"}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-3 space-y-2">
                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                      {item?.name}
                    </h3>
                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                      {item?.type}
                    </p>
                  </div>
                </Link>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
