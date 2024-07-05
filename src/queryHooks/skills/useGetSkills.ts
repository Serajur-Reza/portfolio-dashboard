import axios from "axios";
import { useQuery } from "react-query";
import { live_url } from "../../constants/urls";

export const useGetSkills = () => {
  //   const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: ["skills"],
    queryFn: () => getSkills(),
  });

  return result;
};

const getSkills = async () => {
  try {
    console.log("called");
    const res = await axios.get(`${live_url}/skills`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
