import axios from "axios";
import { useMutation } from "react-query";
import { local_url } from "../../constants/urls";

export const useCreateExperience = () => {
  //   const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: createExperience,
    // onSuccess: ()=>{
    //     queryClient.invalidateQueries['user']
    // }
  });
  return result;
};

const createExperience = async (body: any) => {
  console.log("called");
  const res = await axios.post(`${local_url}/experience`, body);
  return res;
};
