import dayjs from "dayjs";
import { useGetExperiences } from "../../queryHooks/expereience/useGetExperiences";

const Experience = () => {
  const { data: experiences } = useGetExperiences();
  console.log(experiences);
  return (
    <>
      <div className="container mx-auto px-4 my-8  animate-fade">
        <div className="flex justify-center font-bold text-2xl text-blue-600  underline decoration-blue-600">
          <h1>Experience</h1>
        </div>

        {experiences?.data?.data?.map((item: any) => (
          <div className="mt-5">
            <h1 className="text-xl font-bold">{item?.company}</h1>
            <h1 className="text-xl font-bold">
              {dayjs(item?.start_date).format("DD-MMMM-YYYY")} -{" "}
              {dayjs(item?.end_date).format("DD-MMMM-YYYY")}
            </h1>
            <h3 className="text-lg font-semibold">{item?.designation}</h3>
            <h3 className="text-lg ">{item?.description}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
