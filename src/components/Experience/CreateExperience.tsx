import { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import { useCreateExperience } from "../../queryHooks/expereience/useCreateExperience";

const CreateExperience = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { register, handleSubmit, control } = useForm();
  const { mutateAsync: createExprience } = useCreateExperience();
  const onSubmit = async (data: any) => {
    console.log(data);
    const res = await createExprience(data);
    console.log(res);
  };
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Company</label>
          <input
            type="text"
            placeholder="Enter your company"
            className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            {...register("company")}
          />
        </div>
        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Designation</label>
          <input
            type="text"
            placeholder="Enter your designation"
            className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            {...register("designation")}
          />
        </div>
        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Start Date</label>
          <Controller
            name="start_date"
            control={control}
            defaultValue={startDate}
            render={() => (
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date as any)}
                // {...register("start_date")}
              />
            )}
          />
        </div>

        <div className="relative max-w-xs mb-5">
          <label htmlFor="">End Date</label>
          <Controller
            name="end_date"
            control={control}
            defaultValue={endDate}
            render={() => (
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date as any)}
                // {...register("start_date")}
              />
            )}
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
          Create Experience
        </button>
      </form>
    </div>
  );
};

export default CreateExperience;
