import { useForm } from "react-hook-form";
import { useCreateProject } from "../../queryHooks/projects/useCreateProject";

const CreateProject = () => {
  const { register, handleSubmit } = useForm();
  const { mutateAsync: createProject } = useCreateProject();
  const onSubmit = async (data: any) => {
    console.log(data);
    const res = await createProject(data);
    console.log(res);
  };
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter Project Name"
            className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            {...register("name")}
          />
        </div>
        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Type</label>
          <input
            type="text"
            placeholder="Enter type"
            className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            {...register("type")}
          />
        </div>
        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Live</label>
          <input
            type="text"
            placeholder="Enter Live Link"
            className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            {...register("live")}
          />
        </div>

        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Github(Frontend)</label>
          <input
            type="text"
            placeholder="Enter Github(Frontend)"
            className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            {...register("front")}
          />
        </div>
        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Github(Backend)</label>
          <input
            type="text"
            placeholder="Enter Github(Backend)"
            className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            {...register("back")}
          />
        </div>

        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Description</label>
          <textarea
            placeholder="Enter your description"
            className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            {...register("description")}
          />
        </div>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
