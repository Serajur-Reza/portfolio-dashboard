import { useGetProjects } from "../../queryHooks/projects/useGetProject";

const Projects = () => {
  const { data: projects } = useGetProjects();
  console.log(projects);
  return (
    <div>
      {projects?.data?.data?.map((item: any) => (
        <a href="">
          <div>
            <div className="justify-between sm:flex">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-cyan-600">
                  name: {item?.name}
                </h3>

                <p className="text-gray-500 mt-2 pr-2">type:{item?.type}</p>
                <p className="text-gray-500 mt-2 pr-2">
                  description{item?.description}
                </p>
                <p className="text-gray-500 mt-2 pr-2">
                  github(front):{item?.front}
                </p>
                <p className="text-gray-500 mt-2 pr-2">
                  github(back):{item?.back}
                </p>
              </div>
              {/* <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                <span className="flex items-center text-gray-500">
                  {item?.type}
                </span>
                <span className="flex items-center text-gray-500">
                  {item?.front}
                </span>
              </div> */}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
