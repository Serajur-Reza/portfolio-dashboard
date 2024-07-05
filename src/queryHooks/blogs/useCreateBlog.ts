import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { live_url } from "../../constants/urls";

export const useCreateBlog = () => {
  const queryClient: any = useQueryClient();
  const result = useMutation({
    mutationFn: createblog,
    onSuccess: () => {
      queryClient.invalidateQueries["blogs"];
    },
  });
  return result;
};

const createblog = async (body: any) => {
  try {
    const res = await axios.post(`${live_url}/blogs`, body);
    return res;
  } catch (error) {
    console.log(error);
  }
};
