import axios from "axios";
import { useQuery } from "react-query";
import { local_url } from "../../constants/urls";

export const useGetBlogs = () => {
  //   const queryClient = useQueryClient();
  const result = useQuery({
    queryFn: () => getBlogs(),
  });

  return result;
};

const getBlogs = async () => {
  console.log("called");
  const res = await axios.get(`${local_url}/blogs`);
  return res;
};
