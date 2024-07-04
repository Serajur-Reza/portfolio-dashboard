import axios from "axios";
import { useMutation } from "react-query";
import { local_url } from "../../constants/urls";

export const useCreateSkills = () => {
  //   const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: createSkills,
    // onSuccess: ()=>{
    //     queryClient.invalidateQueries['user']
    // }
  });
  return result;
};

const createSkills = async (body: any) => {
  const res = await axios.post(`${local_url}/skills`, body);
  return res;
};
