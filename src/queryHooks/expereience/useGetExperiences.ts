import axios from "axios";
import { useQuery } from "react-query";
import { local_url } from "../../constants/urls";

export const useGetExperiences = () => {
  //   const queryClient = useQueryClient();
  const result = useQuery({
    queryFn: () => getExperiences(),
  });

  return result;
};

const getExperiences = async () => {
  console.log("called");
  const res = await axios.get(`${local_url}/experience`);
  return res;
};
