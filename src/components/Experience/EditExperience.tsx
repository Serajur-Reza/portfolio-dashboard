import { useState } from "react";
import DatePicker from "react-datepicker";

const EditExperience = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Company</label>
          <input
            type="text"
            placeholder="Enter your company"
            className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Designation</label>
          <input
            type="text"
            placeholder="Enter your designation"
            className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date as any)}
          />
        </div>

        <div className="relative max-w-xs mb-5">
          <label htmlFor="">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date as any)}
          />
        </div>

        <div className="relative max-w-xs mb-5">
          <label htmlFor="">Description</label>
          <textarea
            placeholder="Enter your description"
            className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
          Edit Experience
        </button>
      </div>
    </div>
  );
};

export default EditExperience;
