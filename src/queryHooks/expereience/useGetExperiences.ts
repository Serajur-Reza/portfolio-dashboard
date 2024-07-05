import axios from "axios";
import { useQuery } from "react-query";
import { live_url } from "../../constants/urls";

export const useGetExperiences = () => {
  //   const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: ["experience"],
    queryFn: () => getExperiences(),
  });

  return result;
};

const getExperiences = async () => {
  try {
    const res = await axios.get(`${live_url}/experience`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
