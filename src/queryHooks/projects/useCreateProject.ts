import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { live_url } from "../../constants/urls";

export const useCreateProject = () => {
  const queryClient: any = useQueryClient();
  const result = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries["project"];
    },
  });
  return result;
};

const createProject = async (body: any) => {
  try {
    const res = await axios.post(`${live_url}/projects`, body);
    return res;
  } catch (error) {
    console.log(error);
  }
};
