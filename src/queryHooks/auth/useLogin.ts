import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { live_url } from "../../constants/urls";

export const useLogin = () => {
  const queryClient: any = useQueryClient();
  const result = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries["user"];
    },
  });
  return result;
};

const login = async (body: any) => {
  try {
    const res = await axios.post(`${live_url}/login`, body);
    return res;
  } catch (error) {
    console.log(error);
  }
};
