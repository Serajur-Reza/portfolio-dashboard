import axios from "axios";
import { useMutation } from "react-query";
import { local_url } from "../../constants/urls";

export const useLogin = () => {
  //   const queryClient = useQueryClient();
  const result = useMutation({
    mutationFn: login,
    // onSuccess: ()=>{
    //     queryClient.invalidateQueries['user']
    // }
  });
  return result;
};

const login = async (body: any) => {
  console.log("called");
  const res = await axios.post(`${local_url}/login`, body);
  return res;
};
