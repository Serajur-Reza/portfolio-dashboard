import axios from "axios";
import { useQuery } from "react-query";
import { local_url } from "../../constants/urls";

export const useGetProjects = () => {
  //   const queryClient = useQueryClient();
  const result = useQuery({
    queryFn: () => getProjects(),
  });

  return result;
};

const getProjects = async () => {
  console.log("called");
  const res = await axios.get(`${local_url}/projects`);
  return res;
};
