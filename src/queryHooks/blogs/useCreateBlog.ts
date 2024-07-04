import axios from "axios";
import { useMutation } from "react-query";
import { local_url } from "../../constants/urls";

export const useCreateBlog = () => {
  //   const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: createblog,
    // onSuccess: ()=>{
    //     queryClient.invalidateQueries['user']
    // }
  });
  return result;
};

const createblog = async (body: any) => {
  console.log("called");
  const res = await axios.post(`${local_url}/blogs`, body);
  return res;
};
