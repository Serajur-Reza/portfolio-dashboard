import axios from "axios";
import { useMutation } from "react-query";
import { local_url } from "../../constants/urls";

export const useCreateProject = () => {
  //   const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: createProject,
    // onSuccess: ()=>{
    //     queryClient.invalidateQueries['user']
    // }
  });
  return result;
};

const createProject = async (body: any) => {
  console.log("called");
  const res = await axios.post(`${local_url}/projects`, body);
  return res;
};
