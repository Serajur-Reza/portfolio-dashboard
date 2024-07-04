import { useGetExperiences } from "../../queryHooks/expereience/useGetExperiences";

const Experience = () => {
  const { data: experiences } = useGetExperiences();
  console.log(experiences);
  return (
    <div>
      {experiences?.data?.data?.map((item) => (
        <a href="">
          <div>
            <div className="justify-between sm:flex">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-cyan-600">
                  company: {item?.company}
                </h3>

                <p className="text-gray-500 mt-2 pr-2">
                  designation:{item?.designation}
                </p>
                <p className="text-gray-500 mt-2 pr-2">
                  description{item?.description}
                </p>
                <p className="text-gray-500 mt-2 pr-2">
                  start_date:{item?.start_date}
                </p>
                <p className="text-gray-500 mt-2 pr-2">
                  end_date:{item?.end_date}
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

export default Experience;
