import axios from "axios";
import { useQuery } from "react-query";
import { live_url } from "../../constants/urls";

export const useGetBlogs = () => {
  //   const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogs(),
  });

  return result;
};

const getBlogs = async () => {
  try {
    const res = await axios.get(`${live_url}/blogs`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
